import React from "react";
import ElementSelector from "./components/ElementSelector";
import { Container, MainContainer, Title } from "./styles";

const MainScreen = () => (
  <Container>
    <Title>Bend, Break, Blend!</Title>
    <MainContainer>
      <ElementSelector />
    </MainContainer>
  </Container>
);

export default MainScreen;
