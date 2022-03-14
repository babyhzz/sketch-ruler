import React, { useRef, useEffect, useContext } from "react";
import RulerConfigContext from "./RulerConfigContext";
import { RulerDirection } from "./types";
import { drawRuler } from "./utils";

interface CanvasRulerProps {
  width: number;
  height: number;
  scale: number;
  start: number;
  direction: RulerDirection;
}

export default (props: CanvasRulerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D>();
  const rulerConfig = useContext(RulerConfigContext);

  useEffect(() => {
    if (!canvasContextRef.current) {
      canvasContextRef.current = canvasRef.current!.getContext("2d") as CanvasRenderingContext2D;
    }
  }, [canvasRef.current]);

  const { width, height, scale, start, direction } = props;

  if (canvasContextRef.current) {
    drawRuler(canvasContextRef.current, scale, width, height, start, direction, rulerConfig);
  }

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};
