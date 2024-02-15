import * as S from "./styles";
import ReturnArrow from "../../assets/return-104.png";
import NextArrow from "../../assets/next.svg";
import { useState } from "react";

type Question = {
  id: number;
  mainSquare: number;
  description: string;
  answer: string;
  answerSquares: number[];
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
  const [selectedQuestion, setSelectedQuestion] = useState<Question>();

  const getMainSquare = (index: number) => {
    return CRUZADE_QUESTIONS.find((c) => c.mainSquare === index);
  };

  const handleClickSquare = (index: number) => {
    console.log(index);
    const mainSquare = getMainSquare(index);

    if (mainSquare) {
      setSelectedQuestion(mainSquare);
    }
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
              {getMainSquare(index)?.description}
            </S.GridItem>
          ))}
        </S.GameGrid>
      </S.GameView>
      <S.Hint>
        <S.HintAction reverse src={NextArrow} />
        <S.HintText>{selectedQuestion?.description}</S.HintText>
        <S.HintAction src={NextArrow} />
      </S.Hint>
      <S.Letters />
    </S.Wrapper>
  );
};

export default Game;
