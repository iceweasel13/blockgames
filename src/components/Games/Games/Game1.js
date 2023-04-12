import React from "react";
import GamesForm from "../GamesForm/GamesForm.js";
import { useParams } from "react-router-dom";
function Gameone() {
  const { gameNumber } = useParams();

  return (
    <div>
      <h1>Game {gameNumber}</h1>
      {<GamesForm />}
    </div>
  );
}

export default Gameone;
