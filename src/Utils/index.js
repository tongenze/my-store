import { useLocation, useNavigate } from "react-router-dom"
import { theme, Form } from "antd"
import { PointerSensor, useSensor } from '@dnd-kit/core'
//使用递归的方式实现数组、对象的深拷贝
export function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key])
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}

//类组件无法直接使用hook 高阶函数组件包裹一下
export function withRouter(Child) {
  return (props) => {
    const usetoken = theme.useToken()
    const location = useLocation()
    const navigate = useNavigate()
    const useform = Form.useForm()
    const sensor = useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })

    return (
      <Child
        {...props}
        usetoken={usetoken}
        navigate={navigate}
        location={location}
        useform={useform}
        sensor={sensor}
      />
    )
  }
}
