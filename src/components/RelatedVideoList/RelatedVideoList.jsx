import React from "react";
import RelatedVideoItem from "../RelatedVideoItem/RelatedVideoItem";

const RelatedVideoList = () => {
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedVideoItem />
      <RelatedVideoItem />
    </div>
  );
};

export default RelatedVideoList;
