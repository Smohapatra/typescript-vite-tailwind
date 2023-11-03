import { useEffect, useState } from 'react';

function App() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const [currColor, setCurrColor] = useState<string>('blue');

  useEffect(() => {
    const timerId = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * colors.length);
      setCurrColor(colors[randomIdx]);
    }, 1000);

    return () => clearInterval(timerId);
  }, [])

  return (
    <div style={{display: 'flex', gap: '10px', margin: '20px'}}>
      <button style={{ background: currColor, width: '100px', height: '40px', borderRadius: '5%', cursor: 'pointer'}}>Send</button>
      <button style={{ background: currColor, width: '100px', height: '40px', borderRadius: '5%', cursor: 'pointer'}}>Receive</button>
    </div>
  )
}

export default App;
