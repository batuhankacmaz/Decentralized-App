import {createSlice} from "@reduxjs/toolkit";
import Web3 from "web3";

export const web3Slice = createSlice({
  name: "web3",
  initialState: {
    connection: {},
    token: {},
    exchange: {},
    account: "",
  },
  reducers: {
    web3Loaded: (state, action) => {
      state.connection = action.payload;
    },
    web3AccountLoaded: (state, action) => {
      state.account = action.payload;
    },
    tokenLoaded: (state, action) => {
      state.token = action.payload;
    },
    exchangeLoaded: (state, action) => {
      state.exchange = action.payload;
    },
  },
});

export const {web3Loaded, web3AccountLoaded, tokenLoaded, exchangeLoaded} =
  web3Slice.actions;

export default web3Slice.reducer;
