import React from "react";
import { Container, IconContainer, Label } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignature,
  faBolt,
  faBlender,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { transforms } from "../../../../../../constants";

const TransformButton = ({ transform }) => (
  <Container>
    <IconContainer>
      <FontAwesomeIcon
        icon={
          {
            [transforms.BEND]: faSignature,
            [transforms.BLEND]: faBlender,
            [transforms.BREAK]: faBolt,
            [transforms.CLEAR]: faTrashAlt,
          }[transform]
        }
      />
    </IconContainer>
    <Label>
      {
        {
          [transforms.BEND]: "Bend",
          [transforms.BLEND]: "Blend",
          [transforms.BREAK]: "Break",
          [transforms.CLEAR]: "Clear",
        }[transform]
      }
    </Label>
  </Container>
);

export default TransformButton;
