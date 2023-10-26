import { Navigate } from "react-router-dom";

import HomeView from "../Page/HomeView";
import LoginView from "../Page/LoginView";
import WelcomeView from "../Page/WelcomeView";
import ContentView from "../Page/ContentView";
import Page1 from "../Page/Components/page1";
import Page2 from "../Page/Components/page2";

export const Routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },

  {
    path: "/home",
    element: <HomeView />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/welcome" />,
      },
      {
        path: "/home/welcome",
        element: <WelcomeView />,
      },
      {
        path: "/home/content",
        element: <ContentView />,
        children: [
          {
            path: "/home/content/page1",
            element: <Page1 />,
          },
          {
            path: "/home/content/page2",
            element: <Page2 />,
          },
        ],
      },
    ],
  },
  //404页
  // {
  //     path: '*',
  //     element: LazyLoad('/view/404')
  // }
];
//添加一个 动态路由的函数 在登陆的时候 调用 以切换不同的路由
// export const SetRoute = function(arr){

// }
