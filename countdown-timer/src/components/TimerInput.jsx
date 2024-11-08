import React from "react";

function TimerInput({ label, value, onChange }) {
    const handleChange = (e) => {
        const intValue = Math.max(0, parseInt(e.target.value) || 0); // Parse as integer and prevent negative values
        onChange(intValue);
    };

    return (
        <div style={{ margin: "10px" }}>
            <label>{label}</label>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                style={{ width: "50px", marginLeft: "5px" }}
                min="0"
            />
        </div>
    );
}


export default TimerInput;