import { configureStore } from "@reduxjs/toolkit"

import menudata from "./State/menudata"
import tagesdata from './State/tagsdata'


export default configureStore({
  reducer: {
    menudata,
    tagesdata
  },
})
