import React, {useState} from "react";
import Spinner from "../Spinner";
import {useSelector} from "react-redux";
import {handleLastFilledOrders} from "./TradesFilledOrders";

const Trades = () => {
  const filledOrders = useSelector((state) => state.web3.exchangeFilledOrders);
  const arrayForSort = [...filledOrders];
  // Sort orders by date ascending for price comparison
  let orders = arrayForSort.sort((a, b) => a.timestamp - b.timestamp);

  const lastFilledOrders = handleLastFilledOrders(orders);

  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Trades</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Time</th>
                <th>DAPP</th>
                <th>DAPP/ETH</th>
              </tr>
            </thead>
            {lastFilledOrders ? (
              lastFilledOrders.map((order) => (
                <tr className={`order-${order.id}`} key={order.id}>
                  <td className="text-muted">{order.formattedTimestamp}</td>
                  <td>{order.tokenAmount}</td>
                  <td className={`text-${order.tokenPriceClass}`}>
                    {order.tokenPrice}
                  </td>
                </tr>
              ))
            ) : (
              <Spinner type="table" />
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trades;
