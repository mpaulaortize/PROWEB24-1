import React, { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You've reached the lowest point, now there's only up to go.");
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="main-div">
      <div className="content-div">
        <h1>{count}</h1>
        <div className="btn-div">
          <button onClick={handleDecrement} className="btn btn-down">
            <img
              className="retry-img"
              src="../../../img/arrow-down.png"
              alt="Retry"
            />
          </button>
          <button onClick={handleIncrement} className="btn btn-up">
            <img
              className="retry-img"
              src="../../../img/arrow-up.png"
              alt="Retry"
            />
          </button>
          <button onClick={handleReset} className="btn btn-retry">
            <img
              className="retry-img"
              src="../../../img/refresh-ccw-01.png"
              alt="Retry"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
