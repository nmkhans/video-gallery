import React, { useEffect } from "react";
import VideoItem from "../VideoItam/VideoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/reducers/videoSlice/videoSlice";

const VideoGallery = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {videos.map((video) => (
            <VideoItem />
          ))}

          {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
        </div>
      </section>
    </section>
  );
};

export default VideoGallery;
