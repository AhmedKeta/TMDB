import React from "react";
import Card from "react-bootstrap/Card";
import "./MovieCard.css"
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "22rem" }} className="movie-card">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="movie-card__img"
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Link to={`/movie/${movie.id}`} className="btn btn-dark movie-card__details">
          Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
