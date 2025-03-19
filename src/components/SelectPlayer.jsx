import { useState } from "react";
import { Link } from "react-router-dom";

const StartGame = ({ player, setPlayer }) => {
  return (
    <>
      <p>Select Player</p>
      <Link to="/Gameboard">
        <button
          onClick={() => {
            setPlayer(1);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            setPlayer(2);
          }}
        >
          O
        </button>
      </Link>
    </>
  );
};
export default StartGame;
