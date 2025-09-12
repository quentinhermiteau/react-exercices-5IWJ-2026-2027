"use client";

import "./styles.css";

export default function Exo1() {
  const name = "Tyler McGinnis";
  const handle = "tylermcginnis";
  const img = "https://avatars0.githubusercontent.com/u/2933430";

  const getDate = () => {
    return new Date().toDateString();
  };

  return (
    <>
      <div id="notice">
        Modifie ce code pour qu'il fonctionne correctement et que les
        informations de l'utilisateur soit affichées dans la div badge
      </div>
      <div className="badge">
        <img alt={``} src={``} />
        <div>
          <h4>NAME</h4>
          <p>@HANDLE</p>
        </div>
      </div>
      <div>Date du jour: </div>
    </>
  );
}
