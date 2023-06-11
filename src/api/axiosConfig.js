import axios from "axios";
import Loading from "../components/Loading/Loading";

const API_KEY = "bd8cfc32124262c387bf1be89767362c";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
      Loading.show();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
        Loading.hide();
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
