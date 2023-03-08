import React, { useEffect } from "react";
import VideoItem from "../VideoItam/VideoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/reducers/videoSlice/videoSlice";

const VideoGallery = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  if(videos?.isLoading) return "Loading..."

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {videos?.videos?.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
          <div className="col-span-12">{videos.isError && videos.error}</div>
        </div>
      </section>
    </section>
  );
};

export default VideoGallery;
