import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Web3 from "web3";

export const loadWeb3 = createAsyncThunk("web3/loadWeb3", async () => {
  const ethereum = window.ethereum;
  if (typeof ethereum !== "undefined") {
    const web3 = new Web3(ethereum);
    console.log(web3);
    return web3;
  } else {
    window.alert("Please install MetaMask");
    window.location.assign("https://metamask.io/");
  }
});

export const web3Slice = createSlice({
  name: "web3",
  initialState: {
    web3: {},
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
  extraReducers: {
    [loadWeb3.fulfilled]: (state, action) => {
      state.web3 = action.payload;
    },
  },
});

export const {web3Loaded, web3AccountLoaded, tokenLoaded, exchangeLoaded} =
  web3Slice.actions;

export default web3Slice.reducer;
