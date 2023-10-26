import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { Routes } from "./Router";

function App() {
  //useRoutes()必须在函数组件中被调用
  return <div className="App">{useRoutes(Routes)}</div>;
}
export default App;
