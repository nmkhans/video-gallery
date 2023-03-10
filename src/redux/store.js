import { configureStore } from "@reduxjs/toolkit"
import videoReducer from "./reducers/videoSlice/videoSlice";
import tagReducer from "./reducers/tagSlice/tagSlice";
import singleVideoReducer from "./reducers/singleVideoSlice/singleVideoSlice";
import relatedVideoReducer from "./reducers/relatedVideoSlice/relatedVideoSlice";
import filterReducer from "./reducers/filterSlice/filterSlice";

const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer,
    video: singleVideoReducer,
    relatedVideo: relatedVideoReducer,
    filter: filterReducer
  }
})

export default store;