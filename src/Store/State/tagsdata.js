import { createSlice } from "@reduxjs/toolkit"

const tagesdata = createSlice({
  name: "tagesdata",
  initialState: {
    tagsData: []
  },
  reducers: {
    addTag(state, action) {
      let is = state.tagsData.find(item => item.id === action.payload.id)
      if (is) {
        state.tagsData.forEach(i => {
          if (i.id === action.payload.id) {
            i.color = 'processing'
            i.bordeColor = '2px solid rgb(95, 159, 255)'

          } else {
            i.color = ''
            i.bordeColor = ''
          }
        })
      } else {
        state.tagsData.forEach(i => {
          if (i) {
            i.color = ''
            i.bordeColor = ''
          }
        })
        state.tagsData.push(action.payload)

      }

    },
    removeTag(state, action) {
      state.tagsData.forEach((i, index) => {
        if (i.id === action.payload) {
          state.tagsData.splice(index, 1)
        }
      })
    },
    clickTag(state, action) {
      state.tagsData.forEach(i => {
        if (i.id === action.payload) {
          i.color = 'processing'
          i.bordeColor = '2px solid rgb(95, 159, 255)'

        } else {
          i.color = ''
          i.bordeColor = ''
        }
      })

    }
  },
})

export const { addTag, removeTag, clickTag } = tagesdata.actions

export default tagesdata.reducer
