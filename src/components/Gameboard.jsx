import { useState } from "react";
import "../styles/Gameboard.css";

function Gameboard() {
  const [playerTurn, setPlayerTurn] = useState();
  const handleTurns = () => {
    setPlayerTurn((e) => !e);
  };
  return (
    <>
      <div id="gameboard">
        <div className="game-box" id="box-1"></div>
        <div className="game-box" id="box-2"></div>
        <div className="game-box" id="box-3"></div>
        <div className="game-box" id="box-4"></div>
        <div className="game-box" id="box-5"></div>
        <div className="game-box" id="box-6"></div>
        <div className="game-box" id="box-7"></div>
        <div className="game-box" id="box-8"></div>
        <div className="game-box" id="box-9"></div>
      </div>
    </>
  );
}
export default Gameboard;
