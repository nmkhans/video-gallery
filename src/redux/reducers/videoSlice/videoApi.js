import axios from "../../../utils/axios";

const getVideos = async (tags, search) => {
  let query = ""

  if(tags.length > 0) {
    query += tags.map(tag => `tags_like=${tag}`).join("&")
  }

  if(search !== "") {
    query += `&q=${search}`
  }

  const res = await axios.get(`/videos?${query}`);
  return res.data;
}

export default getVideos;