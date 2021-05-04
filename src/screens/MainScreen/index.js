import React, { useState, useEffect } from "react";
import { shapes, transforms } from "../../constants";
import ElementSelector from "./components/ElementSelector";
import TransformSelector from "./components/TransformSelector";
import Canvas from "./components/Canvas";
import { CanvasContainer, Container, MainContainer, Title } from "./styles";
import {
  getLines,
  getShapes,
  modifyShape,
  postShape,
  setLinesListener,
  setShapesListener,
  postLine,
  clearDb,
} from "../../helpers";
import { v4 as uuidv4 } from "uuid";

const MainScreen = () => {
  const [activeTransform, setActiveTransform] = useState(transforms.BEND);
  const [renderShapes, setRenderShapes] = useState([]);
  const [renderLines, setRenderLines] = useState([]);

  useEffect(() => {
    (async () => {
      const shapes = await getShapes();
      setRenderShapes(shapes);
    })();
    (async () => {
      const lines = await getLines();
      setRenderLines(lines);
    })();
  }, []);

  useEffect(() => {
    setShapesListener((shapes) => {
      setRenderShapes(shapes);
    });
    setLinesListener((lines) => {
      setRenderLines(lines);
    });
  }, []);

  const bendShape = (id) => {
    const shape = renderShapes.find((item) => item.id == id);
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
        shape.type = shapes.HEART;
        break;
      }
      case shapes.HEART: {
        shape.type = shapes.CIRCLE;
        break;
      }
      case shapes.CIRCLE: {
        shape.type = shapes.OVAL;
        break;
      }
      case shapes.OVAL: {
        shape.type = shapes.SQUARE;
        break;
      }
      default:
        break;
    }
    modifyShape(id, shape.type);
  };

  const breakShape = (id) => {
    const shape = renderShapes.find((item) => item.id == id);
    const newShape = { ...shape };
    newShape.id = uuidv4();
    const width = {
      [shapes.RECTANGLE]: 70,
      [shapes.SQUARE]: 50,
      [shapes.TRIANGLE]: 50,
      [shapes.OVAL]: 80,
      [shapes.CIRCLE]: 50,
      [shapes.HEART]: 50,
    }[shape.type];
    const height = 50;
    if (shape.x >= 1500 - width) {
      newShape.x -= width + 5 + Math.floor(Math.random() * 10);
    } else {
      newShape.x += width + 5 + Math.floor(Math.random() * 10);
    }

    if (shape.y >= 700 - height) {
      newShape.y -= Math.floor(Math.random() * 10);
    } else {
      newShape.y += Math.floor(Math.random() * 10);
    }
    postShape(newShape);
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
    const newLine = {
      id: uuidv4(),
      from: shape.id,
      to: closest.id,
    };
    postLine(newLine);
  };

  const clear = () => {
    clearDb();
  };

  const addShape = (type) => {
    const newShape = {
      id: uuidv4(),
      type,
      x: Math.floor(Math.random() * 1420),
      y: Math.floor(Math.random() * 620),
    };
    postShape(newShape);
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
        <ElementSelector
          addShape={(type) => {
            addShape(type);
          }}
        />
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
