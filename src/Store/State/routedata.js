import { createSlice } from "@reduxjs/toolkit"
const routesdata = createSlice({
  name: "routesdata",
  initialState: {
    //默认路由
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
    //配置在下层的权限路由 需要放入上面的children[]
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
  reducers: {},
})

export default routesdata.reducer
