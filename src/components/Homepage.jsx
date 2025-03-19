import Hero from "./Hero";

function Homepage({ gameStarted, setGameStarted, player, setPlayer }) {
  return (
    <>
      {!gameStarted && (
        <Hero gameStarted={gameStarted} setGameStarted={setGameStarted} />
      )}
    </>
  );
}
export default Homepage;
