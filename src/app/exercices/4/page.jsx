"use client";

import { useState } from "react";

export default function Exo4() {
  const [inputText, setInputText] = useState('')

  const handleInputChange = (event) => {
    if (event.target.value.length > 10) {
      alert('character limit exceeded')
      return
    }

    setInputText(event.target.value)
  }

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
        <input placeholder="Enter some text" value={inputText} onChange={handleInputChange} />
      </section>
    </>
  );
}
