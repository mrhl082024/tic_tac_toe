import { useState } from "react";

const StartGame = ({ gameStarted, setGameStarted }) => {
  return (
    <>
      {gameStarted === false ? (
        <button
          onClick={() => {
            setGameStarted(true);
          }}
        >
          Start Game!
        </button>
      ) : (
        <>
          <p>Select Player</p>
          <button>X</button>
          <button>O</button>
        </>
      )}
    </>
  );
};
export default StartGame;
