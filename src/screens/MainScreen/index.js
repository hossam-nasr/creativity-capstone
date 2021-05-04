import React from "react";
import { shapes } from "../../constants";
import ElementSelector from "./components/ElementSelector";
import TransformSelector from "./components/TransformSelector";
import Canvas from "./components/Canvas";
import { CanvasContainer, Container, MainContainer, Title } from "./styles";

const renderShapes = [
  {
    id: 100,
    type: shapes.SQUARE,
    x: 20,
    y: 500,
  },
  {
    id: 102,
    type: shapes.TRIANGLE,
    x: 1000,
    y: 800,
  },
];

const MainScreen = () => (
  <Container>
    <Title>Bend, Break, Blend!</Title>
    <TransformSelector />
    <MainContainer>
      <ElementSelector />
      <CanvasContainer>
        <Canvas renderShapes={renderShapes} />
      </CanvasContainer>
    </MainContainer>
  </Container>
);

export default MainScreen;
