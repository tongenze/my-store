import { configureStore } from '@reduxjs/toolkit'

import routesdata from "./State/common"
export default configureStore({
    reducer:{
        routesdata
    }
})