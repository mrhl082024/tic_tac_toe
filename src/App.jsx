import { useState } from "react";
import Homepage from "./components/Homepage";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
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
            <Route path="/Gameboard" element={<Gameboard />} />
            <Route path="/SelectPlayer" element={<SelectPlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
