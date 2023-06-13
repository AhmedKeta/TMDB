import React from "react";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toggleFavourite } from "../../global/slices/favorite";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie, favorite = false }) => {
  const dispatch = useDispatch();
  return (
    <Card
      style={{ width: "22rem" }}
      className="movie-card"
      data-aos="fade-up "
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="500"
    >
      <Card.Img
        variant="top"
        src={
          movie.poster_path
            ? `${process.env.REACT_APP_TMDB_IMG_BASE}${movie.poster_path}`
            : "https://img.freepik.com/free-vector/3d-realistic-illustration-open-movie-clapperboard-clapper-isolated-background_1441-1783.jpg?w=740&t=st=1686481483~exp=1686482083~hmac=e17deab8a1c841ebaa91f1fd31a41e661b8b7f8b80a33b2af36557c8a3dd95bc"
        }
        className="movie-card__img"
      />
      <Card.Body>
        <Card.Title>
          {movie.title}{" "}
          <FontAwesomeIcon
            onClick={() => {
              dispatch(toggleFavourite(movie.id));
            }}
            icon={faStar}
            className={
              favorite ? "movie-card__favorite" : "movie-card__not-favorite"
            }
          />
        </Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Link
          to={`/movie/${movie.id}`}
          className="btn btn-dark movie-card__details">
          Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
