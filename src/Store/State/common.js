import { createSlice } from "@reduxjs/toolkit";

const commondata = createSlice({
  name: "commondata",
  initialState: {
    n: 0,
  },
  reducers: {
    add(state, action) {
      console.log(state, action);
      state.n = state.n + action.payload;
    },
  },
});

export const { add } = commondata.actions;

export default commondata.reducer;
