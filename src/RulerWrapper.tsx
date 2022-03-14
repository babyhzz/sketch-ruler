import React from "react";
import CanvasRuler from "./CanvasRuler";
import { RulerDirection } from "./types";

interface RulerWrapperProps {
  width: number;
  height: number;
  scale: number;
  start: number;
  direction: RulerDirection;
}

export default (props: RulerWrapperProps) => {
  const { width, height, scale, start, direction } = props;

  return (
    <div style={{ position: "absolute", width, height }}>
      <CanvasRuler width={width} height={height} scale={scale} start={start} direction={direction} />
    </div>
  );
};
