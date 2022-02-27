import React from "react";
import {Nav, NavLink, Bars, NavMenu, Btc} from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <Btc />
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            BatuFlex DAPP Exchange
          </NavLink>
          <NavLink to="/exchange" activeStyle>
            BatuFlex CAPP Exchange
          </NavLink>
          <NavLink to="/wallet" activeStyle>
            Wallet
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
