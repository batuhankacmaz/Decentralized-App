import React from "react";
import {orderBookSelector} from "./OrderBookFunctions";
import {reject} from "lodash";

import {useSelector} from "react-redux";

const renderOrder = (order) => {
  return (
    <tr key={order.id}>
      <td>{order.tokenAmount}</td>
      <td className={`text-${order.orderTypeClass}`}>{order.tokenPrice}</td>
      <td>{order.etherAmount}</td>
    </tr>
  );
};

function OrderBook() {
  const allOrders = useSelector((state) => state.web3.exchangeAllOrders);
  const filledOrders = useSelector((state) => state.web3.exchangeFilledOrders);
  const cancelledOrders = useSelector(
    (state) => state.web3.exchangeCancelledOrders
  );

  const openOrders = reject(allOrders, (order) => {
    const orderFilled = filledOrders.some((o) => o.id === order.id);
    const orderCancelled = cancelledOrders.some((o) => o.id === order.id);
    return orderFilled || orderCancelled;
  });
  const finalOrders = orderBookSelector(openOrders);

  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Order Book</div>
        <div className="card-body order-book">
          <table className="table table-dark table-sm small">
            <tbody>
              {finalOrders.sellOrders.map((order) => renderOrder(order))}
              <tr>
                <th>DAPP</th>
                <th>DAPP/ETH</th>
                <th>ETH</th>
              </tr>
              {finalOrders.buyOrders.map((order) => renderOrder(order))}
            </tbody>
            <button onClick={openOrders}> bana bas</button>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
