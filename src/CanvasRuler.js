import React, { useRef, useMemo, useEffect } from "react";
import { drawRuler } from "./utils";

/**
 * width: canvas宽度
 * height: canvas高度
 * scale: 缩放比例
 * 
 * start: 开始刻度值
 * 
 * 
 */
export default function CanvasRuler(props) {
  const canvasRef = useRef(null);
  const canvasContextRef = useRef();
  // console.log(canvasRef);
  // const canvasContext = useMemo(() => {
  //   console.log(canvasRef);
  //   if (canvasRef.current) {
  //     console.log('fresh canvasContext', canvasRef.current.getContent('2d'));
  //     return canvasRef.current.getContent('2d');
  //   }
  // }, [canvasRef.current]);


  // useEffect(() => {
  //   if (canvasContext) {
  //     drawRuler(canvasContext, props.scale, width, height, 0);
  //   }
  // });
  // if (canvasContext) {
  //   drawRuler(canvasContext, props.scale, width, height, 0);
  // }

  // function draw() {
  //   if (canvasContextRef.current) {
  //     drawRuler(canvasContextRef.current, props.scale, width, height, 0);
  //   }
  // }

  console.log('render!!!');

  useEffect(() => {
    if (!canvasContextRef.current) {
      canvasContextRef.current = canvasRef.current.getContext('2d');
    }

    drawRuler(canvasContextRef.current, props.scale, width, height, props.startX);
  }, [canvasRef.current, props.scale, props.startX]);
  // useMemo(() => {
  //   console.log('canvas get', canvasRef.current);
  //   return canvasRef.current;
  // }, [canvasRef.current]);

  const { width, height } = props;
  return <canvas ref={canvasRef} width={width} height={20}></canvas>;
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
