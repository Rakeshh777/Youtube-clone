import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD5tHH4XOWfcGc7TWaCDp4Ei1OfA5flDnQ",
  },
});

export default request;
