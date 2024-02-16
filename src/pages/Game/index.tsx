import * as S from "./styles";
import ReturnArrow from "../../assets/return-104.png";
import NextArrow from "../../assets/next.svg";
import { useMemo, useState } from "react";
import { fillArrayWithLetter, shuffleString } from "../../helpers";

type Question = {
  id: number;
  mainSquare: number;
  description: string;
  answer: string;
  answerSquares: number[];
  isComplete?: boolean;
};

const CRUZADE_QUESTIONS: Question[] = [
  {
    id: 1,
    mainSquare: 0,
    description: "Designação de fortalezas na Espanha",
    answer: "CASTILLO",
    answerSquares: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    mainSquare: 17,
    description: "Jorge Jesus",
    answer: "MISTER",
    answerSquares: [26, 35, 44, 53, 62, 71],
  },
];

const Game = () => {
  const items = new Array(72).fill(null);
  const [cruzadeQuestions, setCruzadeQuestions] =
    useState<Question[]>(CRUZADE_QUESTIONS);
  const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  const [answerLetters, setAnswerLetters] = useState<string[]>([]);

  const getMainSquare = (index: number) => {
    return cruzadeQuestions.find((c) => c.mainSquare === index);
  };

  const handleClickSquare = (index: number) => {
    const mainSquare = getMainSquare(index);

    if (mainSquare) {
      setSelectedQuestion(mainSquare);
      setAnswerLetters(new Array(mainSquare.answer.length).fill(""));
    }
  };

  const handleClickOptionLetter = (l: string) => {
    const filled = fillArrayWithLetter(l, answerLetters);
    setAnswerLetters(filled);
    checkFinishedAnswer(filled);
  };

  const checkFinishedAnswer = (filled: string[]) => {
    if (!filled.includes("")) {
      setAnswerLetters(new Array(selectedQuestion!.answer.length).fill(""));

      if (filled.join("") === selectedQuestion?.answer) {
        const updatedCruzades = cruzadeQuestions.map((c) => {
          if (c.id === selectedQuestion.id) {
            return {
              ...c,
              isComplete: true,
            };
          }
          return c;
        });

        setCruzadeQuestions(updatedCruzades);
      }
    }
  };

  const shuffledOptions = useMemo(() => {
    return shuffleString(selectedQuestion?.answer).split("");
  }, [selectedQuestion]);

  const getLetterByIndex = (index: number) => {
    const cruzade = cruzadeQuestions.find((c) =>
      c.answerSquares.includes(index)
    );

    if (cruzade && cruzade?.isComplete) {
      const iOf = cruzade.answerSquares.indexOf(index);
      return cruzade.answer[iOf];
    }

    return "";
  };

  return (
    <S.Wrapper>
      <S.Heading>
        <S.Return src={ReturnArrow} />
      </S.Heading>
      <S.GameView>
        <S.GameGrid>
          {items.map((_, index) => (
            <S.GridItem
              onClick={() => handleClickSquare(index)}
              isMainSquare={!!getMainSquare(index)}
              isSelectedSquare={
                !!selectedQuestion?.answerSquares?.includes(index)
              }
              key={index}
            >
              {getMainSquare(index)?.description || getLetterByIndex(index)}
            </S.GridItem>
          ))}
        </S.GameGrid>
      </S.GameView>
      <S.Hint>
        <S.HintAction reverse src={NextArrow} />
        <S.HintText>{selectedQuestion?.description}</S.HintText>
        <S.HintAction src={NextArrow} />
      </S.Hint>
      <S.Letters>
        <S.AnswerBox>
          {answerLetters?.map((l) => (
            <S.AnswerLetter>{l}</S.AnswerLetter>
          ))}
        </S.AnswerBox>
        <S.AnswerOptionsBox>
          {shuffledOptions.map((l) => (
            <S.AnswerOptionLetter onClick={() => handleClickOptionLetter(l)}>
              {l}
            </S.AnswerOptionLetter>
          ))}
        </S.AnswerOptionsBox>
      </S.Letters>
    </S.Wrapper>
  );
};

export default Game;
