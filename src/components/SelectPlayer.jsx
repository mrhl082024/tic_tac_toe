import { useState } from "react";

const StartGame = ({ player, setPlayer }) => {
  return (
    <>
      <p>Select Player</p>
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
    </>
  );
};
export default StartGame;
