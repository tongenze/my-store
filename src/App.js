import "./App.css";
import React, { Suspense } from "react";

import { allRoutes } from "./Router";
import { useRoutes } from "react-router-dom";

import { useSelector } from "react-redux";

import { deepClone } from "./Utils";
function App() {
  //创建或刷新是找本地又没有路由表 没有的话从store拿
  const str = window.sessionStorage.getItem("routes");
  const ro = useSelector((state) => state.routesdata.defaulyRoutes);

  const rou = str ? JSON.parse(str) : ro;

  const R = allRoutes(deepClone(rou));

  // const [rout, setrout] = useState(R);

  const element = useRoutes(R);
  //因为添加了跳转路由自动会刷新页面 不用再添加重新渲染了
  // useEffect(() => {
  //   const end = allRoutes(deepClone(rou));
  //   setrout(end);
  // }, [ro]);
  //Suspense 包裹 会在等待页面出现是出现fallback属性的 组件 可以换成一些动画效果
  return <Suspense fallback={<>loading</>}>{element}</Suspense>;
}
export default App;
