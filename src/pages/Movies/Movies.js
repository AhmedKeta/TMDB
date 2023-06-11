import { useEffect, useState } from "react";
import "./Movies.css";
import { getMovies } from "../../api/moviesApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Movies = () => {
  const favorites = useSelector((state) => state.favorites.list);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }
  }

  function handleNextPage() {
    setPage(page + 1);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
  }
  useEffect(() => {
    (async () => {
      const moviesData = await getMovies(page);
      if (moviesData) {
        setMovies(moviesData);
      }

    })();
  }, [page]);

  return (
    <>
      {(
        <div className="row justify-content-around">
          {movies.length && movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} favorite={ favorites.includes(movie.id)} />;
          })}
          <div className="d-flex justify-content-around prev-next-btn">
            {page > 1 ? (
              <Button variant="primary" onClick={handlePrevPage}>
                Previous Page
              </Button>
            ) : (
              ""
            )}
            <Button variant="primary" onClick={handleNextPage}>
              Next Page
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
