import { useContext, useEffect, useState } from "react";
import "./Movies.css";
import { getMovies } from "../../api/moviesApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import LanguageContext from "../../context/language";

const Movies = () => {
  const {language} = useContext(LanguageContext)
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
      const moviesData = await getMovies(page, language);
      if (moviesData) {
        setMovies(moviesData);
      }

    })();
  }, [page, language]);

  return (
    <>
      <h1 className="movies-header">
        {language === "ar" ? "الأفلام الشائعة" : "Popular Movies"}
      </h1>
      {
        <div className="row justify-content-around">
          {movies.length
            ? movies.map((movie) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={movie.id}
                    favorite={favorites.includes(movie.id)}
                  />
                );
              })
            : ""}{" "}
          {movies.length ? (
            <div className="d-flex justify-content-around prev-next-btn">
              {page > 1 ? (
                <Button variant="primary" onClick={handlePrevPage}>
                  {language === "ar" ? "السابقة" : "Previous Page"}
                </Button>
              ) : (
                ""
              )}
              <Button variant="primary" onClick={handleNextPage}>
                {language === "ar" ? "التالية" : "Next Page"}
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      }
    </>
  );
};

export default Movies;
