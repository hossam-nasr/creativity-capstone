import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 100;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
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

export const Square = styled.div`
  transition: all 0.5s;
  width: ${({ width }) => width}px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ bent }) => (bent ? "green" : "red")};
`;

export const Oval = styled.div`
  width: ${({ width }) => width}px;
  height: 50px;
  transition: all 0.5s;
  border-radius: ${({ bent }) => (bent ? "0px" : "50%")};
  background-color: ${({ bent }) => (bent ? "red" : "blue")};
`;

export const Triangle = styled.div`
  display: inline-block;
  position: relative;
  top: 0;
  transform: ${({ bent }) => (bent ? "rotate(-45deg)" : "")};
  width: ${({ bent }) => (!bent ? 0 : 40)}px;
  height: ${({ bent }) => (!bent ? 0 : 40)}px;
  border-left: ${({ bent }) => (!bent ? "30px solid transparent" : "none")};
  border-right: ${({ bent }) => (!bent ? "30px solid transparent" : "none")};
  border-bottom: ${({ bent }) => (!bent ? "50px solid yellow" : "none")};
  background-color: ${({ bent }) => (!bent ? "none" : "pink")};
  transition: all 0.5s;
  margin: ${({ bent }) => (bent ? "0 10px" : "0px")};

  :before,
  :after {
    transition: all 0.5s;
    content: "";
    background-color: ${({ bent }) => (bent ? "pink" : "transparent")};
    border-radius: 50%;
    height: ${({ bent }) => (bent ? "40px" : "0px")};
    position: absolute;
    width: ${({ bent }) => (bent ? "40px" : "0px")};
  }

  :before {
    top: -20px;
    left: 0;
  }

  :after {
    left: 20px;
    top: 0;
  }
`;

export const Circle = styled.div`
  width: ${({ width }) => width}px;
  transition: all 0.5s;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ bent }) => (bent ? "blue" : "purple")};
`;

export const Heart = styled.div`
  background-color: ${({ bent }) => (bent ? "purple" : "pink")};
  display: inline-block;
  height: ${({ bent }) => (bent ? 50 : 40)}px;
  margin: ${({ bent }) => (bent ? "0" : "0 10px")};
  position: relative;
  top: 0;
  transform: ${({ bent }) => (bent ? "none" : "rotate(-45deg)")};
  width: ${({ bent }) => (bent ? 50 : 40)}px;
  border-radius: ${({ bent }) => (bent ? "50%" : "0px")};

  transition: all 0.5s;

  :before,
  :after {
    transition: all 0.5s;
    content: "";
    background-color: ${({ bent }) => (bent ? "transparent" : "pink")};
    border-radius: 50%;
    height: ${({ bent }) => (bent ? 0 : 40)}px;
    position: absolute;
    width: ${({ bent }) => (bent ? 0 : 40)}px;
  }

  :before {
    top: -20px;
    left: 0;
  }

  :after {
    left: 20px;
    top: 0;
  }
`;
