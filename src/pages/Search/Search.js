import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { searchMovies } from "../../api/moviesApi";
import "./Search.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import LanguageContext from "../../context/language";
function Search() {
  const { language } = useContext(LanguageContext);
  const favorites = useSelector((state) => state.favorites.list);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
const searchInputRef = useRef()
  useEffect(() => {
    const fetchSearchResults = async () => {
      setResults([]);
      if (query) {
        const searchResults = await searchMovies(query, language);
        setResults(searchResults);
      }
    };
    fetchSearchResults();
  }, [query, language]);
  useEffect(() => {
searchInputRef.current.focus()
  }, []);

  return (
    <div className="search-page">
      <Row>
        <Col>
          <h1 className="search-header">
            {language === "ar" ? "ابحث عن فيلمك" : "Search Movies "}
          </h1>
          <Form>
            <Form.Group controlId="formQuery">
              <Form.Label>{language === "ar" ? "ابحث:" : "Search:"}</Form.Label>
              <Form.Control
                ref={searchInputRef}
                type="text"
                placeholder={
                  language === "ar" ? "اكتب اسم الفيلم" : "Enter a movie title"
                }
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
          <h2> {language === "ar" ? "النتائج:" : "Results:"}</h2>
          <div className="row justify-content-around">
            {results &&
              results.map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  favorite={favorites.includes(movie.id)}
                />
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Search;
