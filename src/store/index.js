import {configureStore} from "@reduxjs/toolkit";
import globalExchange from "../features/globalExchange/GlobalExchangeSlice";
import web3 from "../features/web3/web3Slice";

export const store = configureStore({
  reducer: {
    globalExchange: globalExchange,
    web3: web3,
  },
});
