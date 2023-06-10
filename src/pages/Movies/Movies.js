import { useEffect, useState } from "react";
import "./Movies.css";
import { getMovies } from "../../api/moviesApi";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Button } from "react-bootstrap";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(true);
      const moviesData = await getMovies(page);
      if (moviesData) {
        setMovies(moviesData);
        setIsLoading(false);
      }

      console.log(moviesData);
    })();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row justify-content-around">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
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
