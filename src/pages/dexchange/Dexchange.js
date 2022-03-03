import React, {useEffect} from "react";
import {GlobalContainer} from "../pages.styles";
import "./Dexchange.css";
import {connect} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange,
} from "../../features/web3/interactions";
import {contractsLoadedSelector} from "../../features/web3/selectors";

function Dexchange() {
  const dispatch = useDispatch();

  const loadBlockchainData = async (dispatch) => {
    const web3 = await loadWeb3(dispatch);
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    const account = await loadAccount(web3, dispatch);
    const token = await loadToken(web3, networkId, dispatch);
    const exchange = await loadExchange(web3, networkId, dispatch);
    console.log(account);
  };

  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [loadBlockchainData]);

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
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Dexchange);
