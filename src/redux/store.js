import { configureStore } from "@reduxjs/toolkit"
import videoReducer from "./reducers/videoSlice/videoSlice";
import tagReducer from "./reducers/tagSlice/tagSlice";

const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer
  }
})

export default store;