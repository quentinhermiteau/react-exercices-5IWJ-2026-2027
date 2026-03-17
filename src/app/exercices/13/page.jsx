"use client";

import { useReducer } from "react";

const initialState = {
  past: [],
  count: 0,
  future: [],
};

function reducer(state, action) {
  const { past, count, future } = state;
  switch (action) {
    case "INCREMENT":
      return { past: [...past, count], count: count + 1, future };
    case "DECREMENT":
      return { past: [...past, count], count: count - 1, future };
    case "UNDO":
      return {
        past: past.slice(0, -1),
        count: past.at(-1),
        future: [...future, count],
      };
    case "REDO":
      return {
        past: [...past, count],
        count: future.at(-1),
        future: future.slice(0, -1),
      };
  }

  return state;
}

export default function CounterWithUndoRedo() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch("INCREMENT");
  const handleDecrement = () => dispatch("DECREMENT");
  const handleUndo = () => dispatch("UNDO");
  const handleRedo = () => dispatch("REDO");

  return (
    <div>
      <div id="notice">
        <p>
          Gère toute la gestion de ce compteur avec useReducer, on doit pouvoir
          incrémenter et décrémenter.
        </p>
        <p>
          Mais aussi, on doit pouvoir faire un undo ou un redo et donc revenir à
          la valeur précédente du compteur.
        </p>
      </div>
      <h1>Counter: {counter.count}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!counter.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!counter.future.length}
      >
        Redo
      </button>
    </div>
  );
}
