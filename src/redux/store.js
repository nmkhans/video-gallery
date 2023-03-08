import { configureStore } from "@reduxjs/toolkit"
import videoReducer from "./reducers/videoSlice/videoSlice"

const store = configureStore({
  reducer: {
    videos: videoReducer
  }
})

export default store;