import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSingleVideo from "./singleVideoApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  video: {}
}

export const fetchSingleVideo = createAsyncThunk("singleVideo/fetchSingleVideo", async (videoId) => {
  const video = await getSingleVideo(videoId);

  return video;
})

const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSingleVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.video = {}
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.video = action.payload
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.video = {}
      })
  }

})