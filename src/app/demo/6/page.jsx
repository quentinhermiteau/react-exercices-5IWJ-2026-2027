"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Wave from "./Wave";

export default function Page() {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);

  const languages = ["Hello", "Hola", "Bonjour", "Hallo", "Привет"];
  const names = ["Quentin", "Robin", "Aurelien", "Ilyam", "Liam"];

  const handleNextLanguageClick = () => {
    const nextIndex =
      languageIndex === languages.length - 1 ? 0 : languageIndex + 1;
    setLanguageIndex(nextIndex);
  };

  const handleNextNameClick = () => {
    const nextIndex = nameIndex === languages.length - 1 ? 0 : nameIndex + 1;
    setNameIndex(nextIndex);
  };

  const options = useMemo(
    () => ({
      index: languageIndex,
    }),
    [languageIndex],
  );

  const getSentence = useCallback(() => {
    console.log(languages[languageIndex], names[nameIndex]);
  }, [languageIndex, nameIndex]);

  useEffect(() => {
    getSentence();
  }, [languageIndex, nameIndex]);

  return (
    <main>
      <h1>
        {languages[languageIndex]}, {names[nameIndex]}
      </h1>
      <button onClick={handleNextLanguageClick}>Next language</button>
      <button onClick={handleNextNameClick}>Next name</button>
      <Wave options={options} />
    </main>
  );
}

/**
 * Instructions:
 * Ajouter memo sur Flag
 * options={{ tone: index }} => Modifier Flag pour prendre ces props
 * Problème?
 * Solution (référence)
 * Ajout un compteur
 * Problème?
 * Solution (useMemo)
 *
 * + useCallback (useCallback = useMemo)
 */
