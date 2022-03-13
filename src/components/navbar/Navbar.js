import React from "react";
import {Nav, NavLink, Bars, NavMenu, Btc} from "./NavbarElements";
import {useSelector} from "react-redux";

function Navbar() {
  const walletAddress = useSelector((state) => state.web3.account);
  return (
    <>
      <Nav>
        <Btc />
        <Bars />
        <NavMenu>
          <NavLink to="/" activestyle="true">
            BatuFlex DAPP Exchange
          </NavLink>
          <NavLink to="/wallet" activestyle="true">
            {walletAddress}
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
