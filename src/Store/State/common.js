import { createSlice } from "@reduxjs/toolkit";

const routesdata = createSlice({
  name: "routesdata",
  initialState: {
    n: 0,
  },
  reducers: {
    add(state, action) {
      console.log(state, action);
    },
  },
});

export const {add} = routesdata.actions


export default routesdata.reducer;
