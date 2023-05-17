import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function increaseByOne() {
    setCount(count + 1);
  }
  function increaseByTwo() {
    setCount2((count2) => count2 + 1);
    setCount2((count2) => count2 + 1);
  }
  return (
    <div className="counters">
      <div className="count1">
        <h1>{count}</h1>
        <button onClick={increaseByOne}>Click me to Increase by 1</button>
      </div>
      <div className="count2">
        <h1>{count2}</h1>
        <button onClick={increaseByTwo}>Click me to Increase by 2</button>
      </div>
    </div>
  );
};

export default Counter;
