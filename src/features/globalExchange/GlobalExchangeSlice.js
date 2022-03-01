import {createSlice} from "@reduxjs/toolkit";

export const GlobalExchangeSlice = createSlice({
  name: "globalExchange",
  initialState: {
    isDark: false,
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const {changeDarkMode} = GlobalExchangeSlice.actions;
export default GlobalExchangeSlice.reducer;
