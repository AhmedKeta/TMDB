import "./Movie.css";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/moviesApi";
const Movie = () => {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      const movieData = await getMovieDetails(id);
      if (movieData) {
        setMovie(movieData);
      }

    })();
  }, []);
  return (movie &&
    <Row className="movie-details">
      <Col md={4}>
        <Card>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
  );
};
export default Movie;
