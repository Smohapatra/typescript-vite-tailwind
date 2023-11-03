import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

function ProgressBarApp() {
  const [bars, setBars] = useState(0);
  const [completed, setCompleted] = useState(0);

  const handleTransitionEnd = () => {
    setCompleted(prev => prev + 1);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={() => setBars(prev => prev + 1)}>Submit</button>
      {Array(bars).fill('').map((_, i) => (
        <ProgressBar key={i} start={i - completed < 3} onComplete={handleTransitionEnd}/>
      ))}
    </>
  )
}

export default ProgressBarApp;
