import React from "react";
import Element from "../../../../components/Element";
import { shapes } from "../../../../constants";
import { Container } from "./styles";

const ElementSelector = ({ addShape }) => (
  <Container>
    {Object.values(shapes).map((shape) => (
      <Element
        shape={shape}
        key={shape}
        addShape={(type) => {
          addShape(type);
        }}
      />
    ))}
  </Container>
);

export default ElementSelector;
