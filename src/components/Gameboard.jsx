import { useState } from "react";
import "../styles/Gameboard.css";

function Gameboard({ player, setPlayer }) {
  const handleTurns = () => {
    setPlayer((e) => !e);
  };
  const [gameboard, setGameboard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <>
      <div id="gameboard">
        {gameboard.map((tile, id) => (
          <div
            className="game-box"
            id={"box" + id}
            key={id}
            onClick={() => {
              if (player) {
                setGameboard(
                  gameboard.map((maptile, i) => (i === id ? "X" : maptile))
                );
                handleTurns();
                console.log(player);
              } else {
                setGameboard(
                  gameboard.map((maptile, i) => (i === id ? "O" : maptile))
                );
                handleTurns();
                console.log(player);
              }
            }}
          >
            {tile}
          </div>
        ))}
      </div>
    </>
  );
}
export default Gameboard;
