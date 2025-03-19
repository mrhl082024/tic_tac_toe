import { useState } from "react";

function Gameboard() {
  const [playerTurn, setPlayerTurn] = useState();
  const handleTurns = () => {
    setPlayerTurn((e) => !e);
  };
  return (
    <>
      <div>test</div>
    </>
  );
}
export default Gameboard;
