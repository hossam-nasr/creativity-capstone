import React from "react";
import Shape from "./components/Shape";
import { Container } from "./styles";

const Canvas = ({
  renderShapes,
  activeTransform,
  breakShape,
  blendShape,
  bendShape,
}) => (
  <Container>
    {renderShapes.map(({ id, type, x, y }) => (
      <Shape
        key={id}
        id={id}
        type={type}
        x={x}
        y={y}
        activeTransform={activeTransform}
        breakShape={breakShape}
        blendShape={blendShape}
        bendShape={bendShape}
      />
    ))}
  </Container>
);

export default Canvas;
