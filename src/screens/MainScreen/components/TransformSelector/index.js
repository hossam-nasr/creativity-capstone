import React from "react";
import { transforms } from "../../../../constants";
import TransformButton from "./components/TransformButton";
import { Container } from "./styles";

const TransformSelector = () => (
  <Container>
    {Object.values(transforms).map((transform) => (
      <TransformButton transform={transform} key={transform} />
    ))}
  </Container>
);

export default TransformSelector;
