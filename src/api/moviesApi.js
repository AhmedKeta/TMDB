import axiosInstance from "./axiosConfig";
export const getMovies = async (page = 1) => {
  try {
      const response = await axiosInstance.get("/3/movie/popular", { params: { page } });
    return response.data.results;
  } catch (error) {
    return console.log(error);
  }
};
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/3/movie/${movieId}`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
export const searchMovies = async (query, page = 1) => {
  try {
        const response = await axiosInstance
            .get("/3/search/movie", { params: { query, page } });
        return response.data.results;
    } catch (error) {
        return console.log(error);
    }
};