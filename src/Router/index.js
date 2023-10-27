import { Navigate } from "react-router-dom";
import { lazy } from "react";
import configureStore from "../Store/index";
import { change } from "../Store/State/routedata";
//定义懒加载路由方法
const lazyLoad = (modulename) => {
  const Module = lazy(() => import(`../Page/${modulename}`));
  return <Module />;
};
// 路由鉴权组件
// const Appraisal = （{children}) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

//路由数据组件化
export const allRoutes = function (routes) {
  let list = [];
  routes.forEach((i, index) => {
    if (i.topath) {
      list.push({ path: i.path, element: <Navigate to={i.topath} /> });
    } else {
      if (!i.children) {
        list.push({ path: i.path, element: lazyLoad(i.importpath) });
      } else {
        list.push({
          path: i.path,
          element: lazyLoad(i.importpath),
          children: [],
        });
      }
    }
    if (i.children) {
      let res = allRoutes(i.children);
      list[index].children.push(...res);
    }
  });

  return list;
};
//传入菜单栏的 id 数组 对应改变权限
export const SetRoute = function (arr) {
  let route = [];
  let rightRoutes = configureStore.getState().routesdata.rightRoutes; //权限路由
  arr.forEach((i) => {
    rightRoutes.forEach((j) => {
      if (i === j.id) {
        route.push(j);
      }
    });
  });

  console.log(configureStore.dispatch);
  configureStore.dispatch(change(route));
};
