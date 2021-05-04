import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 100;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
`;

export const Square = styled.div`
  z-index: 100;
  transition: all 0.5s;
  width: ${({ width }) => width}px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ bent }) => (bent ? "green" : "red")};
`;

export const Triangle = styled.div`
  z-index: 1000;
  width: ${({ bent }) => (!bent ? 0 : 50)}px;
  height: ${({ bent }) => (!bent ? 0 : 50)}px;
  border-left: ${({ bent }) => (!bent ? "30px solid transparent" : "none")};
  border-right: ${({ bent }) => (!bent ? "30px solid transparent" : "none")};
  border-bottom: ${({ bent }) => (!bent ? "50px solid yellow" : "none")};
  background-color: ${({ bent }) => (!bent ? "none" : "red")};
  transition: all 0.5s;
`;

export const Rectangle = styled.div`
  z-index: 1000;
  width: ${({ bent }) => (bent ? 0 : 70)}px;
  height: ${({ bent }) => (bent ? 0 : 50)}px;
  border-left: ${({ bent }) => (bent ? "30px solid transparent" : "none")};
  border-right: ${({ bent }) => (bent ? "30px solid transparent" : "none")};
  border-bottom: ${({ bent }) => (bent ? "50px solid yellow" : "none")};
  background-color: ${({ bent }) => (bent ? "none" : "green")};
  transition: all 0.5s;
`;

export const Circle = styled.div`
  width: ${({ width }) => width}px;
  transition: all 0.5s;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ bent }) => (bent ? "blue" : "purple")};
`;

export const Oval = styled.div`
  width: ${({ width }) => width}px;
  height: 50px;
  transition: all 0.5s;
  border-radius: 50%;
  background-color: ${({ bent }) => (bent ? "purple" : "blue")};
`;
