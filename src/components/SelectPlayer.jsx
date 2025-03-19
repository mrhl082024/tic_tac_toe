import { useNavigate } from "react-router-dom";

const StartGame = ({ setPlayer }) => {
  const navigate = useNavigate();
  return (
    <>
      <p>Select Player</p>
      <button
        onClick={() => {
          navigate("/gameboard");
          setPlayer(true);
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          navigate("/gameboard");
          setPlayer(false);
        }}
      >
        O
      </button>
    </>
  );
};
export default StartGame;
