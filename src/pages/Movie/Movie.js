import "./Movie.css";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieDetails, getTrailer } from "../../api/moviesApi";
import LanguageContext from "../../context/language";
import { faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFavourite } from "../../global/slices/favorite";
import { useDispatch, useSelector } from "react-redux";
import RatingStars from "react-rating-stars-component";

const Movie = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  const { language } = useContext(LanguageContext);

  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showTrailerIcon, setShowTrailerIcon] = useState(false);
  const handleMouseOver = useCallback(() => {
    setShowTrailerIcon(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTrailerIcon(false);
  }, []);
  useEffect(() => {
    (async () => {
      const movieData = await getMovieDetails(id, language);
      if (movieData) {
        setMovie(movieData);
        const movieTrailer = await getTrailer(id);
        if (movieTrailer) setTrailer(movieTrailer);
      }
    })();
  }, [id, language, trailer]);
  return (
    movie && (
      <Row className="movie-details">
        <Col md={4}>
          <Card>
            <div className="card-img-n-fade">
              <Card.Img
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                variant="top"
                src={
                  movie.poster_path
                    ? `${process.env.REACT_APP_TMDB_IMG_BASE}${movie.poster_path}`
                    : "https://img.freepik.com/free-vector/3d-realistic-illustration-open-movie-clapperboard-clapper-isolated-background_1441-1783.jpg?w=740&t=st=1686481483~exp=1686482083~hmac=e17deab8a1c841ebaa91f1fd31a41e661b8b7f8b80a33b2af36557c8a3dd95bc"
                }
                alt={movie.title}
              />
              {showTrailerIcon && (
                <div
                  className="trailer-fade"
                  data-aos="fade-up-right "
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}>
                  <FontAwesomeIcon
                    onClick={() => setShowTrailer(true)}
                    icon={faPlayCircle}
                    className="trailer-icon fa-3x"
                  />
                </div>
              )}
            </div>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="movie-details__body">
            <Card.Body>
              <Card.Title>
                <a href={movie.homepage} target="_blank" rel="noreferrer">
                  {movie.title}
                </a>
                <FontAwesomeIcon
                  onClick={() => {
                    dispatch(toggleFavourite(movie.id));
                  }}
                  icon={faStar}
                  className={
                    favorites.includes(movie.id)
                      ? "movie-card__favorite"
                      : "movie-card__not-favorite"
                  }
                />
              </Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>
                <span className="font-bold">Release Date:</span>{" "}
                {movie.release_date}
              </Card.Text>
              <Card.Text>
                <p className="d-flex">
                  <span className="font-bold">Rate:</span>
                  <RatingStars
                    count={10}
                    value={movie.vote_average}
                    size={18}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="votes">
                    <sub>
                      {Math.round(movie.vote_average*10)/10}({movie.vote_count} votes)
                    </sub>
                  </div>
                </p>
              </Card.Text>
              <Card.Text>
                <span className="font-bold">Language:</span>{" "}
                {movie.original_language}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {showTrailer && trailer && (
          <div className="trailer-modal" onClick={() => setShowTrailer(false)}>
            <iframe title="trailer" src={trailer} allowFullScreen />
          </div>
        )}
      </Row>
    )
  );
};
export default Movie;
