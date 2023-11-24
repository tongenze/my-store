import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Store from "./Store"
import { AliveScope } from 'react-activation'
<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <AliveScope>
      <Provider store={Store}>
        <App />
      </Provider>
    </AliveScope>
=======

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <AliveScope>
        <App />
      </AliveScope>
    </Provider>
>>>>>>> 47bd70cbc563dd7ec8f0b9bec686f1edb1887ac6
  </BrowserRouter>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
