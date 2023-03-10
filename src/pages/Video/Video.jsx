import React, { useEffect } from "react";
import RelatedVideoList from "../../components/RelatedVideoList/RelatedVideoList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleVideo } from "../../redux/reducers/singleVideoSlice/singleVideoSlice";
import Loading from "./../../components/Loading/Loading";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchSingleVideo(+videoId));
  }, [dispatch, videoId]);

  //? render decision

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && Object.keys(video).length < 1)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && Object.keys(video).length > 0)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <VideoPlayer video={video} />
        <RelatedVideoList />
      </div>
    );

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Video;
