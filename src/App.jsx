import { useState } from "react";
import Homepage from "./components/Homepage.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Footer from "./components/Footer.jsx";
import SelectPlayer from "./components/SelectPlayer.jsx";
import Test from "./components/Test.jsx";

import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  //Player 1 = x; Player 2 = O;
  const [player, setPlayer] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                gameStarted={gameStarted}
                setGameStarted={setGameStarted}
                player={player}
                setPlayer={setPlayer}
              />
            }
          />
          <Route
            path="/gameboard"
            element={<Gameboard player={player} setPlayer={setPlayer} />}
          />
          <Route
            path="/selectplayer"
            element={<SelectPlayer setPlayer={setPlayer} />}
          />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
