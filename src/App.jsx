import { useState } from "react";
import Homepage from "./components/Homepage";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";

import "./styles/App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [player, setPlayer] = useState("");

  const [playerTurn, setPlayerTurn] = useState();
  const handleTurns = () => {
    setPlayerTurn((e) => !e);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
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
