import "./Favourites.css";
import { useContext, useEffect, useState } from "react";
import { getMovieDetails } from "../../api/moviesApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import LanguageContext from "../../context/language";

const Favorites = () => {
  const { language } = useContext(LanguageContext);
  const favorites = useSelector((state) => state.favorites.list);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      if (favorites.length) {
        const moviePromises = favorites.map(async (f) => {
          const movie = await getMovieDetails(f, language);
          return movie;
        });
        const movieResults = await Promise.all(moviePromises);
        setMovies(movieResults);
      }
    })();
  }, [favorites, language]);

  return (
    <>
      {
        <div className="row justify-content-around">
          {movies.length &&
            movies.map((movie) => {
              return (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  favorite={favorites.includes(movie.id)}
                />
              );
            })}
        </div>
      }
    </>
  );
};

export default Favorites;
