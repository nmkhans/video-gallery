import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  tags: []
}

const tagSlice = createSlice({
  name: "tag",
  initialState,
  extraReducers: builder => {

  }
})

export default tagSlice.reducer;