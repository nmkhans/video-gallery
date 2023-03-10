import { configureStore } from "@reduxjs/toolkit"
import videoReducer from "./reducers/videoSlice/videoSlice";
import tagReducer from "./reducers/tagSlice/tagSlice";
import singleVideoReducer from "./reducers/singleVideoSlice/singleVideoSlice";

const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer,
    video: singleVideoReducer
  }
})

export default store;