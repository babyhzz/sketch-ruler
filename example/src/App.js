import './App.css';
import SketchRuler from '@hutou/sketch-ruler';
import React, { useState, useRef, useMemo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

function App() {

  const [scale, setScale] = useState(1);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const screenRef = useRef();
  const screenContainerRef = useRef();


  useEffect(() => {
    // 滚动居中
    screenRef.current.scrollLeft = screenContainerRef.current.getBoundingClientRect().width / 2 - 400 //
    screenRef.current.scrollTop = screenContainerRef.current.getBoundingClientRect().height / 2 - 300 //
    console.log(screenContainerRef.current.getBoundingClientRect().height);
  }, []);

  const handleScroll = useCallback(() => {
    const screensRect = document.querySelector('.screen').getBoundingClientRect()
    const boardRect = document.querySelector('.board').getBoundingClientRect()

    // 标尺开始的刻度
    const startX = (screensRect.left - boardRect.left) / scale;
    const startY = (screensRect.top - boardRect.top) / scale;
    setStartX(startX);
    setStartY(startY);
  }, [scale]);

  useEffect(() => handleScroll(), [scale]);

  return (
    <div className="wrapper">
      <div style={{ position: "fixed", left: 0, top: 0 }}>
        scale:
        <input type="number" min={0.2} max={5} step={0.2} value={scale} onChange={e => {
          setScale(e.target.value);
        }} />
      </div>
      <div ref={screenRef} className="screen" onScroll={handleScroll}>
        <div className="screen-container" ref={screenContainerRef}>
          <div className="board" style={{ width: 160, height: 160, transform: `scale(${scale})` }}></div>
        </div>
      </div>
      <SketchRuler width={800} height={600} scale={scale} startX={startX} startY={startY} />
    </div>
  );
}

export default App;
