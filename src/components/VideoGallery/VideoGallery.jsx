import React, { useEffect } from "react";
import VideoItem from "../VideoItam/VideoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/reducers/videoSlice/videoSlice";
import Loading from "../Loading/Loading";

const VideoGallery = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  //? render decision

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && videos.length < 1)
    content = <div className="col-span-12">No Videos found!</div>;

  if (!isLoading && !isError && videos.length > 1)
    content = videos?.map((video) => (
      <VideoItem key={video.id} video={video} />
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGallery;
