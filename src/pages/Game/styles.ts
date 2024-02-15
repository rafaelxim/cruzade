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
  `,
  isSelectedSquare: () => css`
    background-color: #cfe8ff;
  `,
};

export const GridItem = styled.div<GridItemProps>`
  ${({ isMainSquare, isSelectedSquare }) => css`
    background-color: #fcfcfc;
    font-size: 0.75rem;
    max-width: 100%; /* ou outro valor que você considerar adequado */
    overflow: hidden;
    text-overflow: ellipsis;

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
export const HintText = styled.p``;
