import {get, groupBy, reject} from "lodash";
import moment from "moment";
import {ETHER_ADDRESS, GREEN, RED, tokens, ether} from "../../helpers";

// Create the order book
export const orderBookSelector = (orders) => {
  // Decorate orders
  orders = decorateOrderBookOrders(orders);
  // Group orders by "orderType"
  orders = groupBy(orders, "orderType");
  // Fetch buy orders
  const buyOrders = get(orders, "buy", []);
  // Sort buy orders by token price
  orders = {
    ...orders,
    buyOrders: buyOrders.sort((a, b) => b.tokenPrice - a.tokenPrice),
  };
  // Fetch sell orders
  const sellOrders = get(orders, "sell", []);
  // Sort sell orders by token price
  orders = {
    ...orders,
    sellOrders: sellOrders.sort((a, b) => b.tokenPrice - a.tokenPrice),
  };
  return orders;
};

const decorateOrderBookOrders = (orders) => {
  return orders.map((order) => {
    order = decorateOrder(order);
    order = decorateOrderBookOrder(order);
    return order;
  });
};
const decorateOrder = (order) => {
  let etherAmount;
  let tokenAmount;

  if (order.tokenGive == ETHER_ADDRESS) {
    etherAmount = order.amountGive;
    tokenAmount = order.amountGet;
  } else {
    etherAmount = order.amountGet;
    tokenAmount = order.amountGive;
  }

  // Calculate token price to 5 decimal places
  const precision = 100000;
  let tokenPrice = etherAmount / tokenAmount;
  tokenPrice = Math.round(tokenPrice * precision) / precision;

  return {
    ...order,
    etherAmount: ether(etherAmount),
    tokenAmount: tokens(tokenAmount),
    tokenPrice,
    formattedTimestamp: moment.unix(order.timestamp).format("h:mm:ss a M/D"),
  };
};

const decorateOrderBookOrder = (order) => {
  const orderType = order.tokenGive === ETHER_ADDRESS ? "buy" : "sell";
  return {
    ...order,
    orderType,
    orderTypeClass: orderType === "buy" ? GREEN : RED,
    orerFillClass: orderType === "buy" ? "sell" : "buy",
  };
};
