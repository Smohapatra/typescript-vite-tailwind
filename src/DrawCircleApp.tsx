import React, { useState, MouseEvent } from 'react';

interface Circle {
  x: number;
  y: number;
  radius: number;
  color: string;
}

function App() {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [current, setCurrent] = useState<Circle | null>(null);
  const intersectionColor = 'yellow'; // Color for intersections

  const areCirclesIntersecting = (circleA: Circle, circleB: Circle): boolean => {
    const distanceBetweenCenters = Math.sqrt(
      (circleA.x - circleB.x) ** 2 + (circleA.y - circleB.y) ** 2
    );
    return distanceBetweenCenters < circleA.radius + circleB.radius;
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setCurrent({ x, y, radius: 0, color: 'red' });
  }

  const handleMouseUp = () => {
    if (current) {
      // Check for intersections with existing circles
      const intersects = circles.some(circle =>
        areCirclesIntersecting(circle, current)
      );

      // Add the current circle to the array with the appropriate color
      const color = intersects ? intersectionColor : 'red';
      setCircles([...circles, { ...current, color }]);
      setCurrent(null);
    }
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (current) {
      const x = e.clientX;
      const y = e.clientY;
      const radius = Math.sqrt((x - current.x) ** 2 + (y - current.y) ** 2);
      setCurrent({ ...current, radius });
    }
  }

  return (
    <>
      <div
        style={{ width: '100vw', height: '100vh' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {circles.map((circle, idx) => {
          const { x, y, radius, color } = circle;
          return (
            <div
              key={idx}
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                borderRadius: '50%',
                backgroundColor: color,
                position: 'absolute',
                left: `${x - radius}px`,
                top: `${y - radius}px`,
              }}
            ></div>
          )
        })}

        {current && (
          <div
            style={{
              width: `${current.radius * 2}px`,
              height: `${current.radius * 2}px`,
              borderRadius: '50%',
              backgroundColor: current.color || 'red',
              position: 'absolute',
              left: `${current.x - current.radius}px`,
              top: `${current.y - current.radius}px`,
            }}
          ></div>
        )}
      </div>
    </>
  )
}

export default App;
