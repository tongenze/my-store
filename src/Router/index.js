import { Navigate, useRoutes } from "react-router-dom"
import React, { lazy } from "react"
import configureStore from '../Store'
import KeepAlive from 'react-activation'
import LoginView from "../Page/LoginView"
import HomeView from "../Page/HomeView"
import ContentView from "../Page/ContentView"
import WelconmeView from "../Page/WelcomeView"
import Page1 from "../Page/UsePages/page1"
import Page2 from "../Page/UsePages/page2"
import Page3 from "../Page/UsePages/page3"
import Page4 from "../Page/UsePages/page4"

//定义懒加载路由方法
const lazyLoad = (modulename) => {
  const Module = lazy(() => import(`../Page/${modulename}`))
  return <Module />
}
//路由鉴权组件 传入组件和组件的id

function RequireAuth(children, id) {
  let token = window.sessionStorage.getItem('token')

  let arr = GetRoutesArr()

  if (token) {
    if (id) {
      return arr.find(i => i === id) ? ( // 判断 authed 中登录状态是否为 true
        children // 嵌套传的
      ) : (
        <Navigate to="*" />// 跳转到404
      )

    } else {
      return children
    }

  } else {
    return (<Navigate to="/login" replace />)// 跳转到登录
  }
}
export const Router = function () {
  return useRoutes([
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
      element: RequireAuth(<HomeView />),
      children: [
        {
          path: "/home",
          element: <Navigate to="/home/welcome" />,
        },
        {
          path: "/home/welcome",
          element: <WelconmeView />,
        },
        {
          path: "/home/content",
          element: <ContentView />,
          children: [
            {
              id: 1,
              path: "/home/content/page1",
              element: RequireAuth(<KeepAlive cacheKey='1'><Page1 /></KeepAlive>, 1),
            },
            {
              id: 2,
              path: "/home/content/page2",
              element: RequireAuth(<KeepAlive cacheKey='2'><Page2 /></KeepAlive>, 2),
            },
            {
              id: 3,
              path: "/home/content/page3",
              element: RequireAuth(<Page3 />, 3),
            },
            {
              id: 4,
              path: "/home/content/page4",
              element: RequireAuth(<Page4 />, 4),
            },

          ],
        },
      ],
    },
    {
      path: '*',
      element: <>404 未找到路径</>
    },
    {
      path: '/404',
      element: <>无访问权限</>
    }
  ])
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
  routesArr.forEach((i) => {
    routeData.forEach((j) => {
      if (j.children) {
        j.children.forEach((c) => {
          if (i === c.id) {
            let isc = list.find((itme) => itme.key === j.key)
            if (!isc) {
              list.push({
                key: j.key,
                icon: j.icon,
                label: j.label,
                children: [c],
              })
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
//抽取key
export const sendkeys = function () {
  const keys = []
  let arr = configureStore.getState().menudata.menuData
  arr.forEach((i) => {
    if (i.children) {
      i.children.forEach((j) => {
        keys.push(j.key)
      })
    }
  })
  return keys
}
