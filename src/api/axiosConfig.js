import axios from "axios";
// import { useDispatch } from "react-redux";
import { show, hide } from "../global/slices/loading";
import store from "../global/store";

const API_KEY = "bd8cfc32124262c387bf1be89767362c";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    store.dispatch(show());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    store.dispatch(hide());
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
