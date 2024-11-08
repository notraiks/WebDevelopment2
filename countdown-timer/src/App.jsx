import React, { useState, useEffect } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";

function App() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer = null;
        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, time]);

    const startTimer = () => {
      const totalTimeInSeconds = 
          Math.max(0, parseInt(hours) || 0) * 3600 +
          Math.max(0, parseInt(minutes) || 0) * 60 +
          Math.max(0, parseInt(seconds) || 0);
      setTime(totalTimeInSeconds);
      setIsActive(true);
  };
  

    const resetTimer = () => {
        setIsActive(false);
        setTime(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    const displayHours = Math.floor(time / 3600);
    const displayMinutes = Math.floor((time % 3600) / 60);
    const displaySeconds = time % 60;

    return (
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <h1>Countdown Timer</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TimerInput label="Hours" value={hours} onChange={setHours} />
                <TimerInput label="Minutes" value={minutes} onChange={setMinutes} />
                <TimerInput label="Seconds" value={seconds} onChange={setSeconds} />
            </div>
            <button onClick={startTimer} disabled={isActive} style={{ margin: "10px" }}>
                Start
            </button>
            <button onClick={resetTimer} style={{ margin: "10px" }}>
                Reset
            </button>
            <TimerDisplay hours={displayHours} minutes={displayMinutes} seconds={displaySeconds} />
        </div>
    );
}

export default App;