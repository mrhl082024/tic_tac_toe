import { useState } from "react";
import Homepage from "./components/Homepage";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";

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
            <Route path="Gameboard" element={<Gameboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
