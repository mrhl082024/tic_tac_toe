import { useState } from "react";

const StartGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <>
      {gameStarted === false ? (
        <button>Start Game!</button>
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
