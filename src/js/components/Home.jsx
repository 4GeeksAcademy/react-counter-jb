import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import "../../styles/index.css";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter-container">
      <div className="digit">
        <FaRegClock />
      </div>
      {digits.map((digit, index) => (
        <div className="digit" key={index}>
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;

