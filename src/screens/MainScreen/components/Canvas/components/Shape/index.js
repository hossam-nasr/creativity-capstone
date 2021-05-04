import React from "react";
import { Container, Square, Circle, Oval, Rectangle, Triangle } from "./styles";
import { shapes } from "../../../../../../constants";

const Shape = ({ type, x, y }) => (
  <Container x={x} y={y}>
    {
      {
        [shapes.SQUARE]: <Square />,
        [shapes.CIRCLE]: <Circle />,
        [shapes.OVAL]: <Oval />,
        [shapes.RECTANGLE]: <Rectangle />,
        [shapes.TRIANGLE]: <Triangle />,
      }[type]
    }
  </Container>
);

export default Shape;
