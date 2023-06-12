import axiosInstance from "./axiosConfig";
export const getMovies = async (page = 1, language = "en-us") => {
  try {
    const response = await axiosInstance.get("/3/movie/popular", {
      params: { page, language },
    });
    return response.data.results;
  } catch (error) {
    return console.log(error);
  }
};
export const getMovieDetails = async (movieId, language = "en-us") => {
  try {
    const response = await axiosInstance.get(`/3/movie/${movieId}`, {
      params: { language },
    });
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
export const searchMovies = async (query, language = "en-us") => {
  try {
    const response = await axiosInstance.get("/3/search/movie", {
      params: { query, language },
    });
    return response.data.results;
  } catch (error) {
    return console.log(error);
  }
};
