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
  transition: 0.1s;

  :hover {
    width: 60px;
    height: 60px;
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;

  border-bottom: 50px solid yellow;

  transition: 0.1s;

  :hover {
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;

    border-bottom: 60px solid yellow;
  }
`;

export const Rectangle = styled.div`
  width: 70px;
  height: 50px;
  background-color: green;

  transition: 0.1s;

  :hover {
    width: 80px;
    height: 57px;
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: purple;

  transition: 0.1s;

  :hover {
    width: 60px;
    height: 60px;
  }
`;

export const Oval = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;

  transition: 0.1s;

  :hover {
    width: 90px;
    height: 56px;
  }
`;
