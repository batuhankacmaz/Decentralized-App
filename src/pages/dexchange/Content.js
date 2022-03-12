import React, {Component} from "react";
import {connect} from "react-redux";
import {exchangeSelector} from "../../features/dapp/selectors";
import {
  loadAllOrders,
  subscribeToEvents,
} from "../../features/dapp/interactions";
import OrderBook from "./OrderBook";
import Trades from "./Trades";
import MyTransactions from "./MyTransactions";
import PriceChart from "./PriceChart";
import Balances from "./Balances";

class Content extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData(props) {
    await loadAllOrders(this.props.exchange, this.props.dispatch);
    await subscribeToEvents(this.props.exchange, this.props.dispatch);
  }

  render() {
    return (
      <div className="content">
        <div className="vertical-split">
          <Balances />
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
        <OrderBook />
        <div className="vertical-split">
          <PriceChart />
          <MyTransactions />
        </div>
        <Trades />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchange: exchangeSelector(state),
  };
}

export default connect(mapStateToProps)(Content);
