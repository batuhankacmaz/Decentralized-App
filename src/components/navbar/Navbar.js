import React from "react";
import {Nav, NavLink, Bars, NavMenu, Btc} from "./NavbarElements";
import {connect} from "react-redux";
import {accountSelector} from "../../features/web3/selectors";

function Navbar({account}) {
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
            {account}
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
function mapStateToProps(state) {
  return {
    account: accountSelector(state),
  };
}

export default connect(mapStateToProps)(Navbar);
