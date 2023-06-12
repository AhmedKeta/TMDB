import "./Movie.css";
import React, { useState, useEffect, useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/moviesApi";
import LanguageContext from "../../context/language";
const Movie = () => {
  const { language } = useContext(LanguageContext);

  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      const movieData = await getMovieDetails(id, language);
      if (movieData) {
        setMovie(movieData);
      }
    })();
  }, [id, language]);
  return (
    movie && (
      <Row className="movie-details">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={
                movie.poster_path
                  ? `${process.env.REACT_APP_TMDB_IMG_BASE}${movie.poster_path}`
                  : "https://img.freepik.com/free-vector/3d-realistic-illustration-open-movie-clapperboard-clapper-isolated-background_1441-1783.jpg?w=740&t=st=1686481483~exp=1686482083~hmac=e17deab8a1c841ebaa91f1fd31a41e661b8b7f8b80a33b2af36557c8a3dd95bc"
              }
              alt={movie.title}
            />
          </Card>
        </Col>
        <Col md={8}>
          <Card className="movie-details__body">
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>Release Date: {movie.release_date}</Card.Text>
              <Card.Text>Vote Average: {movie.vote_average}</Card.Text>
              <Card.Text>Vote Count: {movie.vote_count}</Card.Text>
              <Card.Text>Language: {movie.original_language}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  );
};
export default Movie;
