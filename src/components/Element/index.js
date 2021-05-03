import React from "react";
import { Circle, Container, Oval, Rectangle, Square, Triangle } from "./styles";
import { shapes } from "../../constants";

const Element = ({ shape }) => (
  <Container>
    {
      {
        [shapes.SQUARE]: <Square />,
        [shapes.CIRCLE]: <Circle />,
        [shapes.OVAL]: <Oval />,
        [shapes.RECTANGLE]: <Rectangle />,
        [shapes.TRIANGLE]: <Triangle />,
      }[shape]
    }
  </Container>
);

export default Element;
