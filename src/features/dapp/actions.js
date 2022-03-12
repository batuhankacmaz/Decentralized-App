// WEB3
export function web3Loaded(connection) {
  return {
    type: "WEB3_LOADED",
    connection,
  };
}

export function web3AccountLoaded(account) {
  return {
    type: "WEB3_ACCOUNT_LOADED",
    account,
  };
}

// TOKEN
export function tokenLoaded(contract) {
  return {
    type: "TOKEN_LOADED",
    contract,
  };
}

// EXCHANGE
export function exchangeLoaded(contract) {
  return {
    type: "EXCHANGE_LOADED",
    contract,
  };
}

export function cancelledOrdersLoaded(cancelledOrders) {
  return {
    type: "CANCELLED_ORDERS_LOADED",
    cancelledOrders,
  };
}

export function filledOrdersLoaded(filledOrders) {
  return {
    type: "FILLED_ORDERS_LOADED",
    filledOrders,
  };
}

export function allOrdersLoaded(allOrders) {
  return {
    type: "ALL_ORDERS_LOADED",
    allOrders,
  };
}

// Cancel Order
export function orderCancelling() {
  return {
    type: "ORDER_CANCELLING",
  };
}

//Order Cancelled
export function orderCancelled(order) {
  return {
    type: "ORDER_CANCELLED",
    order,
  };
}

// Fill Order
export function orderFilling() {
  return {
    type: "ORDER_FILLING",
  };
}

//Order Filled
export function orderFilled(order) {
  return {
    type: "ORDER_FILLED",
    order,
  };
}

// Balances
export function etherBalanceLoaded(balance) {
  return {
    type: "ETHER_BALANCE_LOADED",
    balance,
  };
}

export function tokenBalanceLoaded(balance) {
  return {
    type: "TOKEN_BALANCE_LOADED",
    balance,
  };
}

export function exchangeEtherBalanceLoaded(balance) {
  return {
    type: "EXCHANGE_ETHER_BALANCE_LOADED",
    balance,
  };
}

export function exchangeTokenBalanceLoaded(balance) {
  return {
    type: "EXCHANGE_TOKEN_BALANCE_LOADED",
    balance,
  };
}

export function balancesLoaded() {
  return {
    type: "BALANCES_LOADED",
  };
}

export function balancesLoading() {
  return {
    type: "BALANCES_LOADING",
  };
}
export function etherDepositAmountChanged(amount) {
  return {
    type: "ETHER_DEPOSIT_AMOUNT_CHANGED",
    amount,
  };
}

export function etherWithdrawAmountChanged(amount) {
  return {
    type: "ETHER_WITHDRAW_AMOUNT_CHANGED",
    amount,
  };
}

export function tokenDepositAmountChanged(amount) {
  return {
    type: "TOKEN_DEPOSIT_AMOUNT_CHANGED",
    amount,
  };
}

export function tokenWithdrawAmountChanged(amount) {
  return {
    type: "TOKEN_WITHDRAW_AMOUNT_CHANGED",
    amount,
  };
}
