import { useState } from "react";
import Homepage from "./components/Homepage.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Footer from "./components/Footer.jsx";
import SelectPlayer from "./components/SelectPlayer.jsx";

import "./styles/App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  //Player 1 = x; Player 2 = O;
  const [player, setPlayer] = useState("");

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
          >
            <Route path="gameboard" element={<Gameboard />} />
            <Route path="selectplayer" element={<SelectPlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
