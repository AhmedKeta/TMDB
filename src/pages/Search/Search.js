import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { searchMovies } from "../../api/moviesApi";
import "./Search.css";
import { Link } from "react-router-dom";
function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="search-page">
      <Row>
        <Col>
          <h1>Search Movies</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formQuery">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a movie title"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Results</h2>
          <ul>
            {movies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="btn btn-primary movie-card__details">
                {movie.title}
              </Link>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Search;
