import axios from "axios";
// import { useDispatch } from "react-redux";
import { show, hide } from "../global/slices/loading";
import store from "../global/store";
import { useContext } from "react";
import LanguageContext from "../context/language";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  params: {
    api_key: API_KEY,
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
