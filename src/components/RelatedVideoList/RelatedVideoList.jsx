import React, { useEffect } from "react";
import RelatedVideoItem from "../RelatedVideoItem/RelatedVideoItem";
import { useDispatch } from "react-redux";
import { fetchRelatedVideo } from "./../../redux/reducers/relatedVideoSlice/relatedVideoSlice";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const RelatedVideoList = ({ currentVideoId, videoTags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideo
  );

  useEffect(() => {
    dispatch(fetchRelatedVideo({ currentVideoId, videoTags }));
  }, [dispatch, currentVideoId, videoTags]);

  //? render decision

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && relatedVideos.length < 1)
    content = <div className="col-span-12">No related video!</div>;

  if (!isLoading && !isError && relatedVideos.length > 1)
    content = relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
