import React, { useState } from "react";
import { Container, Square, Circle, Oval, Rectangle, Triangle } from "./styles";
import { shapes, transforms } from "../../../../../../constants";

const Shape = ({
  id,
  type,
  x,
  y,
  activeTransform,
  breakShape,
  blendShape,
  bendShape,
}) => {
  const [bent, setBent] = useState(false);
  return (
    <Container className={`${id}`} x={x} y={y}>
      {
        {
          [shapes.SQUARE]: (
            <Square
              width={bent ? 70 : 50}
              bent={bent}
              onClick={() => {
                switch (activeTransform) {
                  case transforms.BEND:
                    setBent(true);
                    setTimeout(() => {
                      bendShape(id);
                      setBent(false);
                    }, 500);
                    break;
                  case transforms.BREAK:
                    breakShape(id);
                    break;
                  case transforms.BLEND:
                    blendShape(id);
                    break;
                }
              }}
            />
          ),
          [shapes.CIRCLE]: (
            <Circle
              width={bent ? 80 : 50}
              bent={bent}
              onClick={() => {
                switch (activeTransform) {
                  case transforms.BEND:
                    setBent(true);
                    setTimeout(() => {
                      bendShape(id);
                      setBent(false);
                    }, 500);
                    break;
                  case transforms.BREAK:
                    breakShape(id);
                    break;
                  case transforms.BLEND:
                    blendShape(id);
                    break;
                }
              }}
            />
          ),
          [shapes.OVAL]: (
            <Oval
              width={bent ? 50 : 80}
              bent={bent}
              onClick={() => {
                switch (activeTransform) {
                  case transforms.BEND:
                    setBent(true);
                    setTimeout(() => {
                      bendShape(id);
                      setBent(false);
                    }, 500);
                    break;
                  case transforms.BREAK:
                    breakShape(id);
                    break;
                  case transforms.BLEND:
                    blendShape(id);
                    break;
                }
              }}
            />
          ),
          [shapes.RECTANGLE]: (
            <Rectangle
              bent={bent}
              onClick={() => {
                switch (activeTransform) {
                  case transforms.BEND:
                    setBent(true);
                    setTimeout(() => {
                      bendShape(id);
                      setBent(false);
                    }, 500);
                    break;
                  case transforms.BREAK:
                    breakShape(id);
                    break;
                  case transforms.BLEND:
                    blendShape(id);
                    break;
                }
              }}
            />
          ),
          [shapes.TRIANGLE]: (
            <Triangle
              bent={bent}
              onClick={() => {
                switch (activeTransform) {
                  case transforms.BEND:
                    setBent(true);
                    setTimeout(() => {
                      bendShape(id);
                      setBent(false);
                    }, 500);
                    break;
                  case transforms.BREAK:
                    breakShape(id);
                    break;
                  case transforms.BLEND:
                    blendShape(id);
                    break;
                }
              }}
            />
          ),
        }[type]
      }
    </Container>
  );
};

export default Shape;
