import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Gameboard.css";

function Gameboard({ player, setPlayer, setGameStarted }) {
  const navigate = useNavigate();
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
  function resetGame() {
    setGameboard(["", "", "", "", "", "", "", "", ""]);
    console.log(gameboard);
  }

  return (
    <>
      {" "}
      <button
        onClick={() => {
          setGameStarted(false);
          navigate("/");
        }}
      >
        Homepage
      </button>
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
      <button
        onClick={() => {
          resetGame();
        }}
      >
        Reset
      </button>
    </>
  );
}
export default Gameboard;
