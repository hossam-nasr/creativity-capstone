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
  font-size: 26px;
  cursor: pointer;
  color: #eeeeff;

  transition: 0.1s;

  :hover {
    font-size: 30px;
  }
`;

export const Label = styled.div`
  color: #eeeeff;
  font-family: Quicksand, Lato, sans-serif;
  font-size: 14px;
  padding-bottom: 5px;
`;
