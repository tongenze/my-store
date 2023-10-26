import { Navigate } from "react-router-dom"
import { lazy } from "react"
import { useRoutes } from "react-router-dom"

//定义懒加载路由方法
const lazyLoad = (modulename) => {
  const Module = lazy(() => import(`../Page/${modulename}`))
  return <Module />
}

export const Routes = [
  {
    path: "/",
    element: <Navigate to='/login' />,
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
        element: <Navigate to='/home/welcome' />,
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
  //404页
  // {
  //     path: '*',
  //     element: LazyLoad('/view/404')
  // }
]

export const route = [
  {
    id: 1,
    path: "/home/content/page1",
    element: lazyLoad("Components/page1"),
  },
  {
    id: 2,
    path: "/home/content/page2",
    element: lazyLoad("Components/page2"),
  },
]
export const SetRoute = function (arr) {
  console.log(Routes)
  console.log(arr)
  let is = false
  arr.forEach((i) => {
    Routes[2].children[2].children.forEach((n) => {
      if (n.id === i) {
        is = true
      }
    })
    if (is) return
    route.forEach((j) => {
      if (i === j.id) {
        Routes[2].children[2].children.push(j)
      }
    })
  })
}

export const Element = function(){
  return useRoutes(Routes)
}