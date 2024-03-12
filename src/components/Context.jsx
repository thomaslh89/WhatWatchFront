// GenreContext.js
import React, { createContext, useContext, useState } from "react";

const GenreContext = createContext();

export const useGenre = () => useContext(GenreContext);

export const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState("10751"); // Genre par défaut
  const [page, setPage] = useState(1); // Page par défaut

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setPage(1); // Réinitialiser la page lors du changement de genre
  };

  return (
    <GenreContext.Provider value={{ genre, page, handleGenreChange, setPage }}>
      {children}
    </GenreContext.Provider>
  );
};
