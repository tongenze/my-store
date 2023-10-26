import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Element } from "./Router";

import { useSelector } from "react-redux";
function App() {
  const { n } = useSelector((state) => state.routesdata);

  useEffect(() => {}, [n]);

  return (
    <Suspense fallback={<>loading</>}>
      <Element />
    </Suspense>
  );
}
export default App;
