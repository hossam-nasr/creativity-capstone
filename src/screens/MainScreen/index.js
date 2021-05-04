import React from "react";
import ElementSelector from "./components/ElementSelector";
import TransformSelector from "./components/TransformSelector";
import { Container, MainContainer, Title } from "./styles";

const MainScreen = () => (
  <Container>
    <Title>Bend, Break, Blend!</Title>
    <TransformSelector />
    <MainContainer>
      <ElementSelector />
    </MainContainer>
  </Container>
);

export default MainScreen;
