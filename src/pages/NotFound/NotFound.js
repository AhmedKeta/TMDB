import React from "react";
import Container from "react-bootstrap/Container";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Container fluid className="not-found-container">
      <div className="not-found">
        <h1>404 Not Found</h1>
        <div className="not-found-animation">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
