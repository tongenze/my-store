import { createSlice } from "@reduxjs/toolkit"
import {
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"

const menudata = createSlice({
  name: "menudata",
  initialState: {
    menuData: [
      {
        key: "1",
        // icon: <UserOutlined />,
        label: '菜单1',
        children: [
          {
            id: 1,
            key: "/page1",
            label: "page1",
          },

        ]
      },

      {
        key: "2",
        // icon: <VideoCameraOutlined />,
        label: '菜单2',
        children: [
          {
            id: 2,
            key: "/page2",
            label: "page2",
          },
          {
            id: 3,
            key: "/page3",
            label: "page3",
          },

        ]
      },

    ],
  },
  reducers: {},
})

export default menudata.reducer
