import React, { useState } from "react";
import { shapes, transforms } from "../../constants";
import ElementSelector from "./components/ElementSelector";
import TransformSelector from "./components/TransformSelector";
import Canvas from "./components/Canvas";
import { CanvasContainer, Container, MainContainer, Title } from "./styles";

const initialShapes = [
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
  {
    id: 500,
    type: shapes.CIRCLE,
    x: 300,
    y: 500,
  },
  {
    id: 501,
    type: shapes.RECTANGLE,
    x: 400,
    y: 450,
  },
  {
    id: 502,
    type: shapes.OVAL,
    x: 900,
    y: 50,
  },
];

const initialLines = [
  {
    id: 0,
    from: 100,
    to: 102,
  },
];

const MainScreen = () => {
  const [activeTransform, setActiveTransform] = useState(transforms.BEND);
  const [renderShapes, setRenderShapes] = useState(initialShapes);
  const [renderLines, setRenderLines] = useState(initialLines);

  const bendShape = (id) => {
    const newShapes = JSON.parse(JSON.stringify(renderShapes));
    const shape = newShapes.find((item) => item.id == id);
    console.log(shape.type);
    switch (shape.type) {
      case shapes.SQUARE: {
        shape.type = shapes.RECTANGLE;
        break;
      }
      case shapes.RECTANGLE: {
        shape.type = shapes.TRIANGLE;
        break;
      }
      case shapes.TRIANGLE: {
        shape.type = shapes.SQUARE;
        break;
      }
      case shapes.CIRCLE: {
        shape.type = shapes.OVAL;
        break;
      }
      case shapes.OVAL: {
        shape.type = shapes.CIRCLE;
        break;
      }
      default:
        break;
    }
    setRenderShapes(newShapes);
  };

  const breakShape = (id) => {
    const newShapes = JSON.parse(JSON.stringify(renderShapes));
    const shape = newShapes.find((item) => item.id == id);
    const newShape = { ...shape };
    newShape.id = Math.floor(Math.random() * 100000);
    const width = {
      [shapes.RECTANGLE]: 70,
      [shapes.SQUARE]: 50,
      [shapes.TRIANGLE]: 50,
      [shapes.OVAL]: 80,
      [shapes.CIRCLE]: 50,
    }[shape.type];
    const height = 50;
    if (shape.x >= 1500 - width) {
      newShape.x -= width + 5 + Math.floor(Math.random() * 10);
    } else {
      newShape.x += width + 5 + Math.floor(Math.random() * 10);
    }

    if (shape.y >= 1000 - height) {
      newShape.y -= Math.floor(Math.random() * 10);
    } else {
      newShape.y += Math.floor(Math.random() * 10);
    }
    newShapes.push(newShape);
    setRenderShapes(newShapes);
  };

  const blendShape = (id) => {
    const shape = renderShapes.find((item) => item.id == id);
    const sorted = [...renderShapes];
    sorted.sort((a, b) => {
      const distA = Math.sqrt(
        Math.pow(a.x - shape.x, 2) + Math.pow(a.y - shape.y, 2)
      );
      const distB = Math.sqrt(
        Math.pow(b.x - shape.x, 2) + Math.pow(b.y - shape.y, 2)
      );
      return distA - distB;
    });
    const closest = sorted[1];
    const newLines = [
      ...renderLines,
      {
        id: Math.floor(Math.random() * 100000),
        from: shape.id,
        to: closest.id,
      },
    ];
    setRenderLines(newLines);
  };

  const clear = () => {
    setRenderLines([]);
    setRenderShapes([]);
  };

  return (
    <Container>
      <Title>Bend, Break, Blend!</Title>
      <TransformSelector
        activeTransform={activeTransform}
        setActiveTransform={setActiveTransform}
        clear={() => {
          clear();
        }}
      />
      <MainContainer>
        <ElementSelector />
        <CanvasContainer>
          <Canvas
            renderShapes={renderShapes}
            renderLines={renderLines}
            activeTransform={activeTransform}
            bendShape={bendShape}
            breakShape={breakShape}
            blendShape={blendShape}
          />
        </CanvasContainer>
      </MainContainer>
    </Container>
  );
};

export default MainScreen;
