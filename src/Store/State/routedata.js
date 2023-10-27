import { createSlice } from "@reduxjs/toolkit";
const routesdata = createSlice({
  name: "routesdata",
  initialState: {
    defaulyRoutes: [
      {
        path: "/",
        topath: "/login",
      },
      {
        path: "/login",
        importpath: "LoginView",
      },
      {
        path: "/home",
        importpath: "HomeView",
        children: [
          {
            path: "/home",
            topath: "/home/welcome",
          },
          {
            path: "/home/welcome",
            importpath: "WelcomeView",
          },
          {
            path: "/home/content",
            importpath: "ContentView",
            children: [],
          },
        ],
      },
    ],

    rightRoutes: [
      {
        id: 1,
        path: "/home/content/page1",
        importpath: "Components/page1",
      },
      {
        id: 2,
        path: "/home/content/page2",
        importpath: "Components/page2",
      },
    ],
  },
  reducers: {
    change(state, action) {
      state.defaulyRoutes[2].children[2].children = action.payload;
      //登录之后无法马上获取更改后的值 还在找原因
      window.sessionStorage.setItem(
        "routes",
        JSON.stringify(state.defaulyRoutes)
      );
    },
  },
});

export const { change } = routesdata.actions;

export default routesdata.reducer;
