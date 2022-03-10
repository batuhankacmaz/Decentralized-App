import React, {Component} from "react";
import {connect} from "react-redux";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Spinner from "./Spinner";
import {
  orderBookSelector,
  orderBookLoadedSelector,
  accountSelector,
  exchangeSelector,
  orderFillingSelector,
} from "../../features/dapp/selectors";
import {fillOrder} from "../../features/dapp/interactions";

const renderOrder = (order, props) => {
  const {dispatch, exchange, account} = props;
  return (
    <OverlayTrigger
      key={order.id}
      placement="auto"
      overlay={
        <Tooltip id={order.id}>
          {`Click here to ${order.orderFillClass}`}
        </Tooltip>
      }
    >
      <tr
        key={order.id}
        className="order-book-order"
        onClick={(e) => fillOrder(dispatch, exchange, order, account)}
      >
        <td>{order.tokenAmount}</td>
        <td className={`text-${order.orderTypeClass}`}>{order.tokenPrice}</td>
        <td>{order.etherAmount}</td>
      </tr>
    </OverlayTrigger>
  );
};

const showOrderBook = (props) => {
  const {orderBook} = props;

  return (
    <tbody>
      {orderBook.sellOrders.map((order) => renderOrder(order, props))}
      <tr>
        <th>DAPP</th>
        <th>DAPP/ETH</th>
        <th>ETH</th>
      </tr>
      {orderBook.buyOrders.map((order) => renderOrder(order, props))}
    </tbody>
  );
};

class OrderBook extends Component {
  render() {
    return (
      <div className="vertical">
        <div className="card bg-dark text-white">
          <div className="card-header">Order Book</div>
          <div className="card-body order-book">
            <table className="table table-dark table-sm small">
              {this.props.showOrderBook ? (
                showOrderBook(this.props)
              ) : (
                <Spinner type="table" />
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const orderBookLoaded = orderBookLoadedSelector(state);
  const orderBookFilling = orderFillingSelector(state);
  return {
    orderBook: orderBookSelector(state),
    showOrderBook: orderBookLoaded && !orderBookFilling,
    account: accountSelector(state),
    exchange: exchangeSelector(state),
  };
}

export default connect(mapStateToProps)(OrderBook);
