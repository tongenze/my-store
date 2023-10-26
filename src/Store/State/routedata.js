import { createSlice } from "@reduxjs/toolkit";
const routesdata = createSlice({
  name: "routesdata",
  initialState: {
    routesdata: [
      // {
      //   path: "/",
      //   topath: "/login",
      // },
      // {
      //   path: "/login",
      //   importpath: "LoginView",
      // },
      // {
      //   path: "/home",
      //   importpath: "HomeView",
      //   children: [
      //     {
      //       path: "/home",
      //       topath: "/home/welcome",
      //     },
      //     {
      //       path: "/home/welcome",
      //       importpath: "WelcomeView",
      //     },
      //     {
      //       path: "/home/content",
      //       importpath: "ContentView",
      //       children: [],
      //     },
      //   ],
      // },
      {
        id: 1,
        path: "/home/content/page1",
        element: "Components/page1",
      },
      {
        id: 2,
        path: "/home/content/page2",
        element: "Components/page2",
      },
    ],
    n: true,
  },
  reducers: {
    change(state, action) {
      console.log(state, action);
      state.n = !state.n;
    },
  },
});

export const { change } = routesdata.actions;

export default routesdata.reducer;
