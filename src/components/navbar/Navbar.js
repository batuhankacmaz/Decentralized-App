import React from "react";
import {Nav, NavLink, Bars, NavMenu, Btc} from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <Btc />
        <Bars />
        <NavMenu>
          <NavLink to="/" activestyle="true">
            BatuFlex DAPP Exchange
          </NavLink>
          <NavLink to="/exchange" activestyle="true">
            BatuFlex CAPP Exchange
          </NavLink>
          <NavLink to="/wallet" activestyle="true">
            Wallet
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
