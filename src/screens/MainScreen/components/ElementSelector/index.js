import React from "react";
import Element from "../../../../components/Element";
import { shapes } from "../../../../constants";
import { Container } from "./styles";

const ElementSelector = () => (
  <Container>
    {Object.values(shapes).map((shape) => (
      <Element shape={shape} key={shape} />
    ))}
  </Container>
);

export default ElementSelector;
