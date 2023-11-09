import { createSlice } from "@reduxjs/toolkit"

//标签改动存入本地 防止页面刷新丢失
const CunTags = function (tags) {
  window.sessionStorage.setItem(
    'tagkey',
    window.btoa(
      window.encodeURIComponent(
        JSON.stringify(tags)
      )
    )
  )
}
const tagesdata = createSlice({
  name: "tagesdata",
  initialState: {
    tagsData: []
  },
  reducers: {
    //添加标签
    addTag(state, action) {
      let is = state.tagsData.find(item => item.key === action.payload.key)
      if (is) {
        state.tagsData.forEach(i => {
          if (i.key === action.payload.key) {
            i.isactive = true
          } else {
            i.isactive = false
          }
        })
      } else {
        state.tagsData.forEach(i => {
          if (i) {
            i.isactive = false
          }
        })
        state.tagsData.push(action.payload)
      }
      let tags = []
      state.tagsData.forEach(i => {
        tags.push({ key: i.key, isactive: i.isactive, label: i.label })
      })
      CunTags(tags)
    },
    //移除标签  必须用两个循环做两件事  放在一个循环开始的删除之后 就循环不到下一项了
    removeTag(state, action) {
      state.tagsData.forEach((i, index) => {
        if (i.key === action.payload.key) {
          state.tagsData.splice(index, 1)
        }
      })
      if (action.payload.nextkey === '') { } else {
        state.tagsData.forEach((i) => {
          if (i.key === action.payload.nextkey) {
            i.isactive = true
          }
        })
      }
      let tags = []
      state.tagsData.forEach(i => {
        tags.push({ key: i.key, isactive: i.isactive, label: i.label })
      })
      CunTags(tags)

    },
    //点击标签触发修改标签活跃状态
    clickTag(state, action) {
      state.tagsData.forEach(i => {
        if (i.key === action.payload) {
          i.isactive = true

        } else {
          i.isactive = false
        }
      })

    },
    getsessionStorageData(state, action) {
      state.tagsData = action.payload
    }
  },
})

export const { addTag, removeTag, clickTag, getsessionStorageData } = tagesdata.actions
export default tagesdata.reducer
