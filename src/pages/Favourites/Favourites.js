import "./Favourites.css";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/moviesApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    (async () => {
      if (favorites.length) {
        const moviePromises = favorites.map(async (f) => {
          const movie = await getMovieDetails(f);
          return movie;
        });
        const movieResults = await Promise.all(moviePromises);
        setMovies(movieResults);
      }
    })();
  }, [favorites]);

  return (
    <>
      { (
        <div className="row justify-content-around">
          {movies.length && movies.map((movie) => {
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
