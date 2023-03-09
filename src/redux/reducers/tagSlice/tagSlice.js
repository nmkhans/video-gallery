import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  tags: []
}

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();

  return tags
})

const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.tags = []
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.tags = action.payload
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.tags = []
      })
  }
})

export default tagSlice.reducer;