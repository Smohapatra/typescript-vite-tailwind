import { useState, MouseEvent } from 'react';

function PointsApp() {
  const [circles, setCircles] = useState<number[][]>([]);
  const [cache, setCache] = useState<number[][]>([]);

  const handleMouseClick = (e: MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setCircles(prev => [...prev, [x, y]]);
  }

  const undo = () => {
    const lastCircle = circles[circles.length - 1];
    setCache(prev => [...prev, lastCircle]);
    setCircles(prev => prev.slice(0, prev.length - 1));
  }

  const redo = () => {
    const lastCache = cache[cache.length - 1];
    setCircles(prev => [...prev, lastCache]);
    setCache(prev => prev.slice(0, prev.length - 1));
  }

  return (
    <>
      <div style={{ width: '100vw', height: '100vh'}}>
        <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', gap: '10px', padding: '10px', borderBottom: 'solid 1px pink', height: '60px'}}>
          <button onClick={undo} style={{ border: 'solid 1px pink', padding: '10px', borderRadius: '10px'}}>Undo</button>
          <button onClick={redo} style={{ border: 'solid 1px pink', padding: '10px', borderRadius: '10px'}}>Redo</button>
        </div>
        <div style={{ width: '100%', height: 'calc(100vh - 60px)'}} onClick={handleMouseClick}>
          {circles.map((circle, idx) => {
            return (
              <div key={idx} style={{ width: '20px', height: '20px', borderRadius: '10px', backgroundColor: 'red', position: 'absolute', left: `${circle[0]}px`, top: `${circle[1]}px`, transform: 'translate(-50%, -50%)'}}></div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PointsApp;
