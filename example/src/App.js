import './App.css';
import SketchRuler from '@hutou/sketch-ruler';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [scale, setScale] = useState(1);
  const [startX, setStartX] = useState(0);


  useEffect(() => {

  }, []);

  function handleScroll() {
    const screensRect = document.querySelector('.screen').getBoundingClientRect()
    const boardRect = document.querySelector('.board').getBoundingClientRect()

    // 标尺开始的刻度
    const startX = (screensRect.left - boardRect.left) / scale
    setStartX(startX);
  }

  return (
    <div className="wrapper">
      <div style={{ position: "fixed", left: 0, top: 0 }}>
        scale:
        <input type="number" min={0.2} max={5} step={0.2} value={scale} onChange={e => {
          setScale(e.target.value);
        }} />
      </div>
      <div className="screen" onScroll={handleScroll}>
        <div className="screen-container">
          <div className="board" style={{ width: 160, height: 160, transform: `scale(${scale})` }}></div>
        </div>
      </div>
      <SketchRuler scale={scale} startX={startX} />
    </div>
  );
}

export default App;
