import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { searchMovies } from "../../api/moviesApi";
import "./Search.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
function Search() {
  const favorites = useSelector((state) => state.favorites.list);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setResults([]);
      if (query) {
        const searchResults = await searchMovies(query);
        setResults(searchResults);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-page">
      <Row>
        <Col>
          <h1>Search Movies</h1>
          <Form>
            <Form.Group controlId="formQuery">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a movie title"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Results</h2>
          <div className="row justify-content-around">
            {(results && 
              results.map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  favorite={favorites.includes(movie.id)}
                />
              ))
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Search;
