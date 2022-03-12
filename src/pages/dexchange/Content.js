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
import NewOrder from "./NewOrder";

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
          <NewOrder />
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
