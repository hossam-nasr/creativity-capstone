import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #cccccc;
  background: radial-gradient(white, #cccccc 60%, gray);
  justify-content: space-between;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  width: 100%;
`;

export const Title = styled.div`
  color: #eeeeff;
  font-family: Lato, Quicksand, sans-serif;
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  text-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  margin-left: 10px;
  @media all and (max-width: 800px) {
    font-weight: 400;
    font-size: 70px;
  }
  @media all and (max-width: 500px) {
    font-weight: 400;
    font-size: 43px;
  }
`;
