import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const IconContainer = styled.div`
  margin-top: 5px;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ active }) => (active ? "30px" : "26px")};
  cursor: pointer;
  color: ${({ active }) => (active ? "#eeeeff" : "#c9c9dd")};

  transition: 0.1s;

  :hover {
    font-size: 30px;
    color: #eeeeff;
  }
`;

export const Label = styled.div`
  color: ${({ active }) => (active ? "#eeeeff" : "#c9c9dd")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-family: Quicksand, Lato, sans-serif;
  font-size: 14px;
  padding-bottom: 5px;
`;
