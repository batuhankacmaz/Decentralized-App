import React, {Component} from "react";
import {connect} from "react-redux";
import {Tabs, Tab} from "react-bootstrap";
import Spinner from "./Spinner";
import {
  myFilledOrdersLoadedSelector,
  myFilledOrdersSelector,
  myOpenOrdersLoadedSelector,
  myOpenOrdersSelector,
} from "../../features/dapp/selectors";

class MyTransactions extends Component {
  render() {
    console.log(this.props.showMyFilledOrders);
    return (
      <div className="card bg-dark text-white">
        <div className="card-header">My Transactions</div>
        <div className="card-body">
          <Tabs defaultActiveKey="trades" className="bg-dark text-white">
            <Tab eventKey="trades" title="Trades" className="bg-dark">
              <table className="table table-dark table-sm small">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>DAPP</th>
                    <th>DAPP/ETH</th>
                  </tr>
                </thead>
                {this.props.showMyFilledOrders ? (
                  <tbody>
                    {this.props.myOpenOrders.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td className={`text-${order.orderTypeClass}`}>
                            {order.tokenAmount}
                          </td>
                          <td className={`text-${order.orderTypeClass}`}>
                            {order.tokenPrice}
                          </td>
                          <td className="text-muted">x</td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <Spinner type="table" />
                )}
              </table>
            </Tab>
            <Tab eventKey="orders" title="Orders">
              <table className="table table-dark table-sm small">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>DAPP/ETH</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                {this.props.showMyOpenOrders ? (
                  <tbody>
                    {this.props.myFilledOrders.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td className="text-muted">
                            {order.formattedTimestamp}
                          </td>
                          <td className={`text-${order.orderTypeClass}`}>
                            {order.orderSign}
                            {order.tokenAmount}
                          </td>
                          <td className={`text-${order.orderTypeClass}`}>
                            {order.tokenPrice}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <Spinner type="table" />
                )}
              </table>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myFilledOrders: myFilledOrdersSelector(state),
    showMyFilledOrders: myFilledOrdersLoadedSelector(state),
    myOpenOrders: myOpenOrdersSelector(state),
    showMyOpenOrders: myOpenOrdersLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(MyTransactions);
