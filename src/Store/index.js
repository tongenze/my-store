import { configureStore } from "@reduxjs/toolkit"

import commondata from "./State/common"
import menudata from "./State/menudata"
import tagesdata from './State/tagsdata'


export default configureStore({
  reducer: {
    commondata,
    menudata,
    tagesdata
  },
})
