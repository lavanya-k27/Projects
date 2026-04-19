import { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div className="container">
      <h1>Stop Watch</h1>
      <div className="time">
        <span className="indi">{formatTime(minutes)}</span>
        <span className="indi">:</span>
        <span className="indi">{formatTime(seconds)}</span>
      </div>

      <button className="button" onClick={() => setIsRunning(true)}>
        Start
      </button>
      <button className="button" onClick={() => setIsRunning(false)}>
        Stop
      </button>
      <button
        className="button"
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
          setMinutes(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
