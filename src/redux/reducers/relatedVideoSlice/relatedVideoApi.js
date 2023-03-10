import axios from "../../../utils/axios";

const getRelatedVideo = async ({videoTags, currentVideoId}) => {
  const limit = 5;
  const qureryString = videoTags.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${currentVideoId}&_limit=${limit}`;

  const res = await axios.get(`/videos?${qureryString}`)

  return res.data
}

export default getRelatedVideo;