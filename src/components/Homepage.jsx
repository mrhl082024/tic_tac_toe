import Hero from "./Hero";
import StartGame from "./StartGame";

function Homepage({ gameStarted, setGameStarted }) {
  return (
    <>
      {gameStarted === false ? (
        <Hero gameStarted={gameStarted} setGameStarted={setGameStarted} />
      ) : (
        <>
          <p>Select Player:</p>
          <button>X</button>
          <button>O</button>
        </>
      )}
    </>
  );
}
export default Homepage;
