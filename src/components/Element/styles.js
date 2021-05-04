import styled from "styled-components";
import { shapes } from "../../constants";

export const Container = styled.div`
  cursor: pointer;
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

export const Heart = styled.div`
  background-color: pink;
  display: inline-block;
  height: 40px;
  margin: 0 10px;
  position: relative;
  top: 0;
  transform: rotate(-45deg);
  width: 40px;

  transition: all 0.1s;

  :before,
  :after {
    transition: all 0.1s;
    content: "";
    background-color: pink;
    border-radius: 50%;
    height: 40px;
    position: absolute;
    width: 40px;
  }

  :before {
    top: -20px;
    left: 0;
  }

  :after {
    left: 20px;
    top: 0;
  }

  :hover {
    width: 50px;
    height: 50px;
    :before {
      top: -25px;
      width: 50px;
      height: 50px;
    }
    :after {
      left: 25px;
      width: 50px;
      height: 50px;
    }
  }
`;
