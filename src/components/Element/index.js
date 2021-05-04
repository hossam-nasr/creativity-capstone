import React from "react";
import {
  Circle,
  Container,
  Oval,
  Rectangle,
  Square,
  Triangle,
  Heart,
} from "./styles";
import { shapes } from "../../constants";

const Element = ({ shape, addShape }) => (
  <Container
    onClick={() => {
      addShape(shape);
    }}
  >
    {
      {
        [shapes.SQUARE]: <Square />,
        [shapes.CIRCLE]: <Circle />,
        [shapes.OVAL]: <Oval />,
        [shapes.RECTANGLE]: <Rectangle />,
        [shapes.TRIANGLE]: <Triangle />,
        [shapes.HEART]: <Heart />,
      }[shape]
    }
  </Container>
);

export default Element;
