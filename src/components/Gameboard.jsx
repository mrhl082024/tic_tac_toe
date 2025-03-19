import { useState } from "react";
import "../styles/Gameboard.css";

function Gameboard({ player, setPlayer }) {
  const handleTurns = () => {
    setPlayer((e) => !e);
  };
  const [gameboard, setGameboard] = useState([
    "test",
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
              setGameboard(
                gameboard.map((maptile, i) => (i === id ? "x" : maptile))
              );
              handleTurns();
              console.log(player);
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
