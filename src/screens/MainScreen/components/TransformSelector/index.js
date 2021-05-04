import React from "react";
import { transforms } from "../../../../constants";
import TransformButton from "./components/TransformButton";
import { Container } from "./styles";

const TransformSelector = ({ activeTransform, setActiveTransform }) => (
  <Container>
    {Object.values(transforms).map((transform) => (
      <TransformButton
        active={activeTransform == transform}
        setActiveTransform={setActiveTransform}
        transform={transform}
        key={transform}
      />
    ))}
  </Container>
);

export default TransformSelector;
