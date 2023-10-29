import { Navigate } from "react-router-dom"
import { lazy } from "react"
import configureStore from "../Store/index"
//定义懒加载路由方法
const lazyLoad = (modulename) => {
  const Module = lazy(() => import(`../Page/${modulename}`))
  return <Module />
}
// 路由鉴权组件
// const Appraisal = （{children}) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

//路由数据组件化
export const allRoutes = function (routes) {
  let list = []
  routes.forEach((i, index) => {
    if (i.topath) {
      list.push({ path: i.path, element: <Navigate to={i.topath} /> })
    } else {
      if (!i.children) {
        list.push({ path: i.path, element: lazyLoad(i.importpath) })
      } else {
        list.push({
          path: i.path,
          element: lazyLoad(i.importpath),
          children: [],
        })
      }
    }
    if (i.children) {
      let res = allRoutes(i.children)
      list[index].children.push(...res)
    }
  })

  return list
}
//传入菜单栏的 id 数组 对应改变权限
export const SetRoute = function (arr) {
  let route = []
  let rightRoutes = configureStore.getState().routesdata.rightRoutes //权限路由
  arr.forEach((i) => {
    rightRoutes.forEach((j) => {
      if (i === j.id) {
        route.push(j)
      }
    })
  })
  return route
}
//获取本地储存的权限id
export const GetRoutesArr = function () {
  let rightroutes = []

  let str = sessionStorage.getItem("routers")
  if (str) {
    rightroutes = JSON.parse(decodeURIComponent(window.atob(str)))
  }

  return rightroutes
}
//匹配菜单栏
export const mateMenu = function (routesArr, routeData) {
  let list = []
  routesArr.forEach(i => {
    routeData.forEach(j => {
      if (j.children) {
        j.children.forEach(c => {
          if (i === c.id) {
            let isc = list.find((itme) => itme.key === j.key)
            if (!isc) {
              list.push({ key: j.key, icon: j.icon, label: j.label, children: [c] })
            } else {
              list.forEach((z) => {
                if (z.key === j.key) {
                  z.children.push(c)
                }
              })
            }
          }
        })
      }
    })
  })
  return list
}
