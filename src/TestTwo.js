import React, { useState } from "react";

function TestTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <br />
      <br />
      <h2>Counter</h2>
      <br />
      <br />
      Count:{count}
      <button onClick={() => setCount(initialCount)}> reset</button> <br />{" "}
      <br />
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Increment
      </button> <br /> <br />
      <button onClick={() => setCount(count - 1)}>decrement</button> <br />{" "}
      <br />
      <button onClick={IncrementFive}> Increment 5 </button> <br /> <br />
    </div>
  );
}

export default TestTwo;
