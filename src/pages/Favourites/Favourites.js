import "./Favourites.css";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/moviesApi";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (favorites.length) {
        const moviePromises = favorites.map(async (f) => {
          const movie = await getMovieDetails(f);
          return movie;
        });
        const movieResults = await Promise.all(moviePromises);
        setMovies(movieResults);
      }
      setIsLoading(false);
    })();
  }, [favorites]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row justify-content-around">
          {movies.map((movie) => {
            return (
              <MovieCard
                movie={movie}
                key={movie.id}
                favorite={favorites.includes(movie.id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Favorites;
