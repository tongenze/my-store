import { configureStore } from "@reduxjs/toolkit";

import commondata from "./State/common";
import routesdata from "./State/routedata";
import menudata from "./State/menudata";
export default configureStore({
  reducer: {
    commondata,
    routesdata,
    menudata,
  },
});
