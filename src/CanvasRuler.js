import React, { useRef } from "react";


export default function CanvasRuler() {
  const canvasRef = useRef();

  return <canvas ref={canvasRef}>CanvasRuler</canvas>;
}

// export default class CanvasRuler extends Component {


//   componentDidMount() {
//     this.updateCanvasContext()
//     this.drawRuler()
//   }

//   setCanvasRef = (ref) => {
//     this.$canvas = ref
//     this.canvasContext = ref && ref.getContext('2d')
//   }

//   render() {
//     return <canvas ref={this.setCanvasRef}>CanvasRuler</canvas>;
//   }
// }
