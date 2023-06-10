import axios from "axios";

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
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosInstance;
