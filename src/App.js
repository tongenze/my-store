import "./App.css"
import React, { Suspense } from "react"
import { Element } from "./Router"






function App() {
  return <Suspense fallback={<>loading</>}><Element/></Suspense>
}
export default App
