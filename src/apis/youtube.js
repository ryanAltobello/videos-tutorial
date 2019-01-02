import axios from "axios";

const KEY = "AIzaSyA8MgoEdKyTYKlxVNxbKC86696bDn4rc50";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
