import React from "react";
import Navbar from "../components/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dexchange from "./dexchange/Dexchange";
import Exchange from "./exchange/Exchange";
import Wallet from "./wallet/Wallet";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Dexchange} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/wallet" component={Wallet} />
      </Routes>
    </Router>
  );
}

export default App;
