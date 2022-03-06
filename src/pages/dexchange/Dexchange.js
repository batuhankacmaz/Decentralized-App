import React, {useEffect} from "react";
import {GlobalContainer} from "../pages.styles";
import "./Dexchange.css";
import {useDispatch, useSelector} from "react-redux";
import {loadWeb3} from "../../features/web3/web3Slice";
import Content from "./Content";

function Dexchange() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.web3.token);
  const exchange = useSelector((state) => state.web3.exchange);
  const ethereum = window.ethereum;
  if (!token || !exchange) {
    window.alert(
      "Token or Exchange smart contract not detected on the current network. Please select another network with Metamask."
    );
  }
  useEffect(() => {
    dispatch(loadWeb3(ethereum));
  }, [dispatch]);

  return (
    <GlobalContainer>
      {token || exchange ? <Content /> : <div className="content"></div>}
    </GlobalContainer>
  );
}

export default Dexchange;
