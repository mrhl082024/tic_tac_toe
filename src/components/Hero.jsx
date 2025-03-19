import { useNavigate, Outlet } from "react-router-dom";
function Hero({ gameStarted, setGameStarted }) {
  const navigate = useNavigate();
  return (
    <>
      <p>
        Welcome to Tic Tac Toe! <br />
        This was a code project I set for myself, to better understand
        javascript logic and conditional statements. <br />
        It's nothing fancy, but please enjoy :3
      </p>
      <button
        onClick={() => {
          // setGameStarted(true);
          navigate("/test");
        }}
      >
        Start Game!
      </button>
    </>
  );
}
export default Hero;
