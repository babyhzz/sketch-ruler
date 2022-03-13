import React, { Component } from "react";
import CanvasRuler from "./CanvasRuler";

const width = 800;
const height = 600;
class SketchRuler extends Component {

  render() {
    return (
      <div style={{ backgroundColor: '#EEEEEE' }}>
        <CanvasRuler width={width} height={height} scale={this.props.scale} startX={this.props.startX} />
      </div>
    );
  }
}

export default SketchRuler;
