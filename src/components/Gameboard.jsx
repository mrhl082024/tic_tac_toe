import { useState } from "react";

function Gameboard() {
  const [playerTurn, setPlayerTurn] = useState();
  const handleTurns = () => {
    setPlayerTurn((e) => !e);
  };
  return (
    <>
      <div id="gameboard">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
export default Gameboard;
