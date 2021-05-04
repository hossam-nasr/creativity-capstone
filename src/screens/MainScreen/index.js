import React, { useState } from "react";
import { shapes, transforms } from "../../constants";
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

const MainScreen = () => {
  const [activeTransform, setActiveTransform] = useState(transforms.BEND);

  return (
    <Container>
      <Title>Bend, Break, Blend!</Title>
      <TransformSelector
        activeTransform={activeTransform}
        setActiveTransform={setActiveTransform}
      />
      <MainContainer>
        <ElementSelector />
        <CanvasContainer>
          <Canvas renderShapes={renderShapes} />
        </CanvasContainer>
      </MainContainer>
    </Container>
  );
};

export default MainScreen;
