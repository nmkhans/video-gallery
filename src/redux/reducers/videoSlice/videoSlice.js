import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getVideos from "./videoApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  videos: []
}

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async ({ tags, search }) => {
  const videos = await getVideos(tags, search);

  return videos
})

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.videos = []
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.videos = action.payload
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.videos = []
      })
  }
})

export default videoSlice.reducer;