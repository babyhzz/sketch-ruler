import React, { Component } from "react";
import RulerWrapper from "./RulerWrapper";
import { RulerConfig } from "./types";
import RulerConfigContext, { defaultConfig } from "./RulerConfigContext";

interface SketchRulerProps {
  width: number;
  height: number;
  scale: number;
  startX: number;
  startY: number;
  config?: Partial<RulerConfig>;
}

export default (props: SketchRulerProps) => {
  const { width, height, scale, startX, startY, config = {} } = props;
  const configValue = { ...defaultConfig, ...config };

  return (
    <div>
      <RulerConfigContext.Provider value={configValue}>
        <RulerWrapper
          width={width}
          height={configValue.thickness}
          scale={scale}
          start={startX}
          direction="horizontal"
        />
        <RulerWrapper width={configValue.thickness} height={height} scale={scale} start={startY} direction="vertical" />
      </RulerConfigContext.Provider>
    </div>
  );
};
