import axios from "../../../utils/axios"

const getSingleVideo = async (videoId) => {
  const res = await axios.get(`/videos/${videoId}`);

  return res.data;
}

export default getSingleVideo;