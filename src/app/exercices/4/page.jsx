"use client";

export default function Exo4() {
  return (
    <>
      <div id="notice">
        <p>
          Modifie ce code pour que lorsque tu rajoutes une lettre dans l'input,
          la longueur de l'input est vérifiée.
        </p>
        <p>
          Si l'input dépase les 10 caractères afficher une alert qui indique que
          la taille maximum est dépassée.
        </p>
      </div>
      <section>
        <h1>Character Limit</h1>
        <input placeholder="Enter some text" />
      </section>
    </>
  );
}
