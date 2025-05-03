import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
