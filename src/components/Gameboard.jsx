import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Gameboard.css";

function Gameboard({ player, setPlayer, setGameStarted }) {
  const navigate = useNavigate();
  const handleTurns = () => {
    setPlayer((e) => !e);
  };

  const [message, setMessage] = useState("");
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
    setMessage("");
    console.log(gameboard);
  }
  function whoWins() {
    if (
      (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X") ||
      (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") ||
      (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X") ||
      (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X") ||
      (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X") ||
      (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X") ||
      (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X") ||
      (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X")
    ) {
      setMessage("X Wins!");
    }
    if (
      (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O") ||
      (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") ||
      (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O") ||
      (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O") ||
      (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O") ||
      (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O") ||
      (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O") ||
      (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O")
    ) {
      setMessage("O Wins!");
    }
  }

  useEffect(() => whoWins(), [gameboard]);
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
              } else {
                setGameboard(
                  gameboard.map((maptile, i) => (i === id ? "O" : maptile))
                );
                handleTurns();
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
      <p>{message} </p>
    </>
  );
}
export default Gameboard;
