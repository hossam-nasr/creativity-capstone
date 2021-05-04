import React from "react";
import Shape from "./components/Shape";
import LineTo from "react-lineto";
import { Container } from "./styles";

const Canvas = ({
  renderShapes,
  renderLines,
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
    {renderLines.map(({ id, from, to }) => (
      <LineTo
        borderColor="black"
        borderStyle="solid"
        zIndex={1}
        delay={0}
        key={id}
        from={`${from}`}
        to={`${to}`}
      />
    ))}
  </Container>
);

export default Canvas;
