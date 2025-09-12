"use client";

export default function App() {
  const count = 0;

  return (
    <main>
      <div id="notice">
        Utilise le hook useState pour faire fonctionner ce compteur
      </div>
      <span>{count}</span>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </main>
  );
}
