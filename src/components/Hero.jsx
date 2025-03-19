import { Link } from "react-router-dom";
function Hero({ gameStarted, setGameStarted }) {
  return (
    <>
      <p>
        Welcome to Tic Tac Toe! <br />
        This was a code project I set for myself, to better understand
        javascript logic and conditional statements. <br />
        It's nothing fancy, but please enjoy :3
      </p>
      <Link to="SelectPlayer">
        <button
          onClick={() => {
            setGameStarted(true);
          }}
        >
          Start Game!
        </button>
      </Link>
    </>
  );
}
export default Hero;
