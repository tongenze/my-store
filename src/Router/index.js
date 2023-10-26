import { Navigate } from "react-router-dom";
import { lazy } from "react";
import configureStore from "../Store/index";
import { useRoutes } from "react-router-dom";
import { change } from "../Store/State/routedata";
//定义懒加载路由方法
const lazyLoad = (modulename) => {
  const Module = lazy(() => import(`../Page/${modulename}`));
  return <Module />;
};

export let Routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: lazyLoad("LoginView"),
  },
  {
    path: "/home",
    element: lazyLoad("HomeView"),
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/welcome" />,
      },
      {
        path: "/home/welcome",
        element: lazyLoad("WelcomeView"),
      },
      {
        path: "/home/content",
        element: lazyLoad("ContentView"),
        children: [],
      },
    ],
  },
  // 404页
  // {
  //     path: '*',
  //     element: LazyLoad('/view/404')
  // }
];

// const Routes = function () {
//   console.log(3, configureStore.getState().routesdata);
//   let routesdata = configureStore.getState().routesdata;
//   let Routes = getdata(routesdata.routesdata);
//   console.log(4, "hahahahahahah");
//   // const dispatch = useDispatch();
//   // const routesdata = useSelector((state) => state.routesdata);
//   // console.log(routesdata);
//   return Routes;
// };

// const getdata = function (arr) {
//   let list = [];
//   arr.forEach((i, index) => {
//     if (i.topath) {
//       list.push({ path: i.path, element: <Navigate to={i.topath} /> });
//     } else {
//       if (!i.children) {
//         list.push({ path: i.path, element: lazyLoad(i.importpath) });
//       } else {
//         list.push({
//           path: i.path,
//           element: lazyLoad(i.importpath),
//           children: [],
//         });
//       }
//     }
//     if (i.children) {
//       let res = getdata(i.children);
//       list[index].children.push(...res);
//     }
//   });
//   return list;
// };

export const SetRoute = function (arr) {
  let route = [];
  let r = configureStore.getState().routesdata.routesdata;
  r.forEach((i) => {
    route.push({ id: i.id, path: i.path, element: lazyLoad(i.element) });
  });
  console.log(Routes);
  // console.log(arr);
  let is = false;
  arr.forEach((i) => {
    Routes[2].children[2].children.forEach((n) => {
      if (n.id === i) {
        is = true;
      }
    });
    if (is) return;
    route.forEach((j) => {
      if (i === j.id) {
        Routes[2].children[2].children.push(j);
      }
    });
  });
  configureStore.dispatch(change());
};

export const Element = function () {
  console.log(2, "aaaaaaaaaaaaaaaaaaaaaaaaa");

  return useRoutes(Routes);
};
