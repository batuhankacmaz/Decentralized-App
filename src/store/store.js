import {configureStore} from "@reduxjs/toolkit";

// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

// And use redux-batch as an example of adding enhancers
import {reduxBatch} from "@manaflair/redux-batch";

import web3Slice from "../features/web3/web3Slice";

const preloadedState = {};

export const store = configureStore({
  reducer: {
    web3: web3Slice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  enhancers: [reduxBatch],
});
