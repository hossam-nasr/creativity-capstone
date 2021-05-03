import styled from "styled-components";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  cursor: pointer;

  transition: 0.1s;

  :hover {
    width: 60px;
    height: 60px;
  }
`;
