import React from "react";
import { RulerConfig } from "./types";

export const defaultConfig: RulerConfig = {
  thickness: 24,
  tickColor: "#CDCDCD",
  bgColor: "#FAFAFA",
  fontColor: "#333333",
};

export default React.createContext<RulerConfig>(defaultConfig);
