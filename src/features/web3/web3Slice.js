import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Web3 from "web3";
import Token from "../../abis/Token.json";
import Exchange from "../../abis/Exchange.json";

export const loadWeb3 = createAsyncThunk(
  "web3/loadWeb3",
  async (ethereum, {dispatch}) => {
    if (typeof ethereum !== "undefined") {
      const web3 = new Web3(ethereum);
      dispatch(loadAccount(web3));
      dispatch(loadToken(web3));
      dispatch(loadExchange(web3));
      return web3;
    } else {
      window.alert("Please install MetaMask");
      window.location.assign("https://metamask.io/");
    }
  }
);
export const loadAccount = createAsyncThunk(
  "web3/loadAccount",
  async (web3) => {
    const ethereum = window.ethereum;
    await ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const account = await accounts[0];
    if (typeof account !== "undefined") {
      return account;
    } else {
      window.alert("Please Login with metamask");
      return null;
    }
  }
);
export const loadToken = createAsyncThunk(
  "web3/laodToken",

  async (web3) => {
    const ethereum = window.ethereum;
    await ethereum.enable();
    const networkId = await web3.eth.net.getId();
    try {
      const token = new web3.eth.Contract(
        Token.abi,
        Token.networks[networkId].address
      );
      return token;
    } catch (error) {
      console.log(
        "Contract not deployed to the current network. Please select another network with Metamask"
      );
      return null;
    }
  }
);
export const loadExchange = createAsyncThunk(
  "web3/loadExchange",

  async (web3) => {
    const ethereum = window.ethereum;
    await ethereum.enable();
    const networkId = await web3.eth.net.getId();
    try {
      const exchange = new web3.eth.Contract(
        Exchange.abi,
        Exchange.networks[networkId].address
      );
      return exchange;
    } catch (error) {
      console.log(
        "Contract not deployed to the current network. Please select another network with metamask"
      );
      return null;
    }
  }
);

export const web3Slice = createSlice({
  name: "web3",
  initialState: {
    web3: {},
    token: {},
    exchange: {},
    account: "",
  },
  reducers: {
    loadToken: (state, action) => {},
  },
  extraReducers: {
    [loadWeb3.fulfilled]: (state, action) => {
      state.web3 = action.payload;
    },
    [loadAccount.fulfilled]: (state, action) => {
      state.account = action.payload;
    },
    [loadToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
    [loadExchange.fulfilled]: (state, action) => {
      state.exchange = action.payload;
    },
  },
});

export default web3Slice.reducer;
