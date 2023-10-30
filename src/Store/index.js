import { configureStore } from "@reduxjs/toolkit"

import commondata from "./State/common"
import menudata from "./State/menudata"
export default configureStore({
  reducer: {
    commondata,
    menudata,
  },
})
