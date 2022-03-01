import React, {useEffect} from "react";
import {GlobalContainer} from "../pages.styles";
import "./Dexchange.css";
import {useDispatch, useSelector} from "react-redux";
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange,
} from "../../features/web3/interactions";

function Dexchange() {
  const dispatch = useDispatch();
  const loadBlockchainData = async (dispatch) => {
    const web3 = await loadWeb3(dispatch);
    await window.ethereum.enable();
    const network = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    const account = await loadAccount(web3, dispatch);
    const token = await loadToken(web3, networkId, dispatch);
    const exchange = await loadExchange(web3, networkId, dispatch);
    const totalSupply = await token.methods.totalSupply().call();
    console.log("token", web3);
    console.log("network", network);
    console.log("networkId", networkId);
    console.log("account", account);
    console.log("token", token);
    console.log("exchange", exchange);
    console.log("totalSupply", totalSupply);
  };

  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);

  return (
    <GlobalContainer>
      <div className="content">
        <div className="vertical-split">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#" className="card-link">
                Card link
              </a>
            </div>
          </div>
          <div className="card bg-dark text-white">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#" className="card-link">
                Card link
              </a>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#" className="card-link">
                Card link
              </a>
            </div>
          </div>
        </div>
        <div className="vertical-split">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#" className="card-link">
                Card link
              </a>
            </div>
          </div>
          <div className="card bg-dark text-white">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#" className="card-link">
                Card link
              </a>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#" className="card-link">
                Card link
              </a>
            </div>
          </div>
        </div>
      </div>
    </GlobalContainer>
  );
}

export default Dexchange;
