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
    if (gameboard[(0, 1, 2)] === "X") {
      setMessage("X Wins!");
      console.log("HES HIM!");
      console.log(message);
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
