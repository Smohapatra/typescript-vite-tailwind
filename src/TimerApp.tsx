import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, seconds]);

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function formatTime(sec: number) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = Math.floor(sec % 60);

    return [hours, minutes, seconds]
      .map(v => ('' + v).padStart(2, '0'))
      .join(':');
  }

  return (
    <div className="app">
      <div className="time">
        {formatTime(seconds)}
      </div>
      <div className="row">
        <button className="button" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
