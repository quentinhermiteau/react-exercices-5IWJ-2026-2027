"use client";

import { useReducer, useState } from "react";

export default function CounterState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </main>
  );
}

function reducer(state, value) {
  return state + value;
}

const initialState = 0;

export default function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch(1);
  const handleDecrement = () => dispatch(-1);

  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </main>
  );
}
