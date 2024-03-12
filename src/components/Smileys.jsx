import React, { useState, useEffect } from "react";
import Emoji from "react-emojis";
import { useGenre } from "./Context";
import "./Smileys.css";

const Smileys = () => {
  const { handleGenreChange } = useGenre();
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, []);

  const handleEmojiClick = (genreId, message) => {
    handleGenreChange(genreId);
    setValue(message); // Met à jour la valeur avec le message correspondant à l'emoji
  };

  return (
    <div className="wrapper-emoji">
      <div className="smileys">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("35", "Je suis d'humeur joyeuse !")}
          title="Je suis joyeux !"
        >
          <Emoji emoji="partying-face" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("28", "Je vais tout casser !")}
          title="Je suis en colère"
        >
          <Emoji emoji="angry-face" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("16", "Je suis un grand enfant !")}
          title="Je suis un enfant"
        >
          <Emoji emoji="child" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("80", "Policier")}
          title="Documentaires"
        >
          <Emoji emoji="man-student" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("18", "Drame")}
          title="Documentaires"
        >
          <Emoji emoji="loudly-crying-face" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("14", "Fantastique")}
          title="Documentaires"
        >
          <Emoji emoji="exploding-head" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("37", "Je suis un Cowboy !")}
          title="Documentaires"
        >
          <Emoji emoji="cowboy-hat-face" size="50" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleEmojiClick("10749", "Amoureux")}
          title="Romances"
        >
          <Emoji emoji="couple-with-heart" size="50" text="Romance" />
        </div>
      </div>
      <p>{value}</p>
    </div>
  );
};

export default Smileys;
