import { useState,useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  
  const startTimer = () => {
    setIsRunning(true);
    const DELAY = 100;
    let id = setInterval(() => {
      setTime((t) => t + DELAY);
    }, DELAY);
    setIntervalId(id);
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  }
  
  useEffect(()=>{
      startTimer()
  },[])

  return (
    <div className="timer">
      <h3>Timer</h3>
      <p>Time elapsed: {(time/1000).toFixed(2)}</p>
      <div>
        {isRunning?<button className="btn-red" onClick={stopTimer}>Stop timer</button>:<button className="btn-green" onClick={startTimer}>Start timer</button>}
        <button onClick={()=>setTime(0)}>Reset timer</button>
      </div>
    </div>
  );
};

export default Timer;
