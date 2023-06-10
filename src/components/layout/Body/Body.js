import { Container } from "react-bootstrap";
import "./Body.css";
import { Outlet } from "react-router-dom";
// import { Children } from "react"
const Body = () => {
  return (
    <div className="main-body">
      <div className="nav-placeholder"></div>
      <Container><Outlet /></Container>
    </div>
  );
};
export default Body;
