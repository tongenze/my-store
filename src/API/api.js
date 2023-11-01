import request from "./request"
//注册
export const Addyonghu = (params) => request.post("sys/regist", params)
//登录
export const userLogin = (params) => request.post("user/addUser", params)
