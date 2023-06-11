import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { searchMovies } from "../../api/moviesApi";
import "./Search.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
function Search() {
  const favorites = useSelector((state) => state.favorites.list);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      setResults([]);
      if (query) {
        const searchResults = await searchMovies(query);
        setResults(searchResults);
      }
      setIsLoading(false);
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
            {isLoading ? (
              <Loading />
            ) : (
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
