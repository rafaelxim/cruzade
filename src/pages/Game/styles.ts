import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;

  display: flex;
  flex-direction: column;
`;

export const Heading = styled.section`
  background-color: #979797;
  flex: 0 1 10%;

  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const GameGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 2px;
  background-color: #000000;
  position: relative;
`;

type GridItemProps = {
  isMainSquare: boolean;
  isSelectedSquare: boolean;
};

const GridItemModifier = {
  isMainSquare: () => css`
    background-color: #cfcfcf;
    font-size: 0.75rem;
  `,
  isSelectedSquare: () => css`
    background-color: #cfe8ff;
  `,
};

export const GridItem = styled.div<GridItemProps>`
  ${({ isMainSquare, isSelectedSquare }) => css`
    background-color: #fcfcfc;
    max-width: 100%; /* ou outro valor que você considerar adequado */
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${isMainSquare && GridItemModifier.isMainSquare()}
    ${isSelectedSquare && GridItemModifier.isSelectedSquare()}
  `}
`;

export const GameView = styled.section`
  flex: 0 1 40%;
`;
export const Hint = styled.section`
  background-color: #fa3e00;
  flex: 0 1 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0 1rem;
`;
export const Letters = styled.section`
  background-color: #979797;
  flex: 0 1 40%;
`;

export const Return = styled.img`
  width: 4rem;
  height: 4rem;
`;

type HintActionProps = {
  reverse?: boolean;
};

export const HintAction = styled.img<HintActionProps>`
  ${({ reverse }) => css`
    ${reverse &&
    css`
      transform: rotate(180deg);
    `}
  `}
  width: 2rem;
`;
export const HintText = styled.p`
  font-size: 1.5rem;
`;

export const AnswerBox = styled.div`
  display: flex;
  gap: 0 1rem;
  padding: 0 2rem;
  margin-top: 2rem;
`;
export const AnswerLetter = styled.div`
  min-height: 5rem;
  flex: 1;
  border-bottom: 2px solid #fff;
`;
export const AnswerOptionsBox = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.5rem;
  padding: 0 2rem;
  font-size: 2rem;
`;

export const AnswerOptionLetter = styled.div`
  background-color: #d9d9d9;
  text-align: center;
`;
