import "./App.css"
import React, { Suspense, useEffect } from "react"

import { allRoutes, GetRoutesArr, SetRoute } from "./Router"
import { useRoutes } from "react-router-dom"

import { useSelector } from "react-redux"

import { deepClone } from "./Utils"
function App() {
  const defaulyRoutes = useSelector((state) => state.routesdata.defaulyRoutes)
  //redux的数据是只读的 深拷贝一份
  const routs = deepClone(defaulyRoutes)
  routs[2].children[2].children = SetRoute(GetRoutesArr())
  const element = useRoutes(allRoutes(routs))
  //因为添加了跳转路由自动会刷新页面 不用再添加重新渲染了
  useEffect(() => {
    console.log("APP刷新了")
  },)
  //Suspense 包裹 会在等待页面出现是出现fallback属性的 组件 可以换成一些动画效果
  return <Suspense fallback={<>loading</>}>{element}</Suspense>

}
export default App
