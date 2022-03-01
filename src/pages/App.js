import React from "react";
import Navbar from "../components/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dexchange from "./dexchange/Dexchange";
import Exchange from "./exchange/Exchange";
import Wallet from "./wallet/Wallet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/" element={<Dexchange />} />
      </Routes>
    </Router>
  );
}

export default App;
