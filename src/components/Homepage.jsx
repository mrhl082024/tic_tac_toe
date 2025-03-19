import Hero from "./Hero";
import SelectPlayer from "./SelectPlayer";

function Homepage({ gameStarted, setGameStarted, player, setPlayer }) {
  return (
    <>
      {gameStarted === false ? (
        <Hero gameStarted={gameStarted} setGameStarted={setGameStarted} />
      ) : (
        <SelectPlayer player={player} setPlayer={setPlayer} />
      )}
    </>
  );
}
export default Homepage;
