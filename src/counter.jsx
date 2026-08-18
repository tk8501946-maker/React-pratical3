import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <h1>Counter Application</h1>

      <div className="count-box">
        <h2>Count: {count}</h2>
      </div>

      <div className="button-group">
        <button className="increment-btn" onClick={increment}>
          Increment
        </button>

        <button className="decrement-btn" onClick={decrement}>
          Decrement
        </button>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;