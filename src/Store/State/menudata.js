import { createSlice } from "@reduxjs/toolkit"

const menudata = createSlice({
  name: "menudata",
  initialState: {
    menuData: [
      {
        key: "1",
        icon: "",
        label: '菜单1',
        children: [
          {
            id: 1,
            key: "page1",
            label: "页面1",
          },

        ]
      },

      {
        key: "2",
        icon: "",
        label: '菜单2',
        children: [
          {
            id: 2,
            key: "page2",
            label: "页面2",
          },
          {
            id: 3,
            key: "page3",
            label: "页面3",
          },

        ]
      },
      {
        key: "3",
        icon: "",
        label: '菜单3',
        children: [
          {
            id: 4,
            key: "page4",
            label: "页面4",
          },

        ]
      },

    ],
  },
  reducers: {},
})
export default menudata.reducer
