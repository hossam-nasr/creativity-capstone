import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
`;

export const Square = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: red;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;

  border-bottom: 50px solid yellow;
`;

export const Rectangle = styled.div`
  width: 70px;
  height: 50px;
  background-color: green;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: purple;
`;

export const Oval = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
`;
