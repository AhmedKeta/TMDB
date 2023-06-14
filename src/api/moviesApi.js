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
    console.log(response.data)
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
export const getTrailer = async (id, language = "en-us") => {
  try {
    const Trailers = await axiosInstance.get(`/3/movie/${id}/videos`);
    console.log(Trailers.data.results[0]);
    return `https://www.youtube.com/embed/${Trailers.data.results[0].key}?autoplay=1`;
  } catch (error) {
    return console.log(error);
  }
};
