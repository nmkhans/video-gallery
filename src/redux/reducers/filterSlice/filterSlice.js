import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: ""
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleTag: (state, action) => {
      const selectedTag = action.payload;
      if(state.tags.includes(selectedTag)) {
        state.tags = state.tags.filter(tag => tag !== selectedTag)
      } else {
        state.tags = [...state.tags, selectedTag]
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    }
  }
})

export default filterSlice.reducer;
export const { toggleTag, searched } = filterSlice.actions;