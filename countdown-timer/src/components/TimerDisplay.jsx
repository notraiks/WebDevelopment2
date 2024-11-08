import React from "react";

function TimerDisplay({ hours, minutes, seconds }) {
    const formatTime = (time) => String(time).padStart(2, "0");

    return (
        <div style={{ fontSize: "2em", marginTop: "20px" }}>
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
    );
}

export default TimerDisplay;