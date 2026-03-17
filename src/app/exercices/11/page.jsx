"use client";

import { useReducer } from "react";
import Slider from "./Slider";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, { action, value }) => {
  switch (action) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "RESET":
      return { count: 0, step: 1 };
    case "UPDATE_STEP":
      return { ...state, step: value };
  }
};

export default function Counter() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ action: "INCREMENT" });
  const handleDecrement = () => dispatch({ action: "DECREMENT" });
  const handleReset = () => dispatch({ action: "RESET" });
  const handleUpdateStep = (step) =>
    dispatch({ action: "UPDATE_STEP", value: step });

  return (
    <main>
      <div id="notice">
        À l'aide de useReducer et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{counter.count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider
        value={counter.step}
        min={1}
        max={10}
        onChange={handleUpdateStep}
      />
    </main>
  );
}
