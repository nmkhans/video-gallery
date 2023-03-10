import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideo from "./relatedVideoApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  relatedVideos: []
}

export const fetchRelatedVideo = createAsyncThunk("relatedVideo/fetchRelatedVideo", async ({currentVideoId, videoTags}) => {
  const videos = await getRelatedVideo({videoTags, currentVideoId});

  return videos
})

const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.relatedVideos = []
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.relatedVideos = action.payload
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.relatedVideos = []
      })
  }
})

export default relatedVideoSlice.reducer;