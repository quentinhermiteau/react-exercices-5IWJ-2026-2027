"use client";

const initialState = {
  past: [],
  count: 0,
  future: [],
};

function reducer(state, action) {
  const { past, count, future } = state;

  return state;
}

export default function CounterWithUndoRedo() {
  const state = initialState;

  const handleIncrement = () => {};
  const handleDecrement = () => {};
  const handleUndo = () => {};
  const handleRedo = () => {};

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
      <h1>Counter: {state.count}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
