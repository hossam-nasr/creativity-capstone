import React from "react";
import Shape from "./components/Shape";
import { Container } from "./styles";

const Canvas = ({ renderShapes }) => (
  <Container>
    {renderShapes.map(({ id, type, x, y }) => (
      <Shape key={id} type={type} x={x} y={y} />
    ))}
  </Container>
);

export default Canvas;
