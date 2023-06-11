import { Container } from "react-bootstrap";
import "./Body.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
// import { Children } from "react"
const Body = () => {
  const loadingState = useSelector((state) => state.loading);
  return (
    <div className="main-body">
      <div className="nav-placeholder"></div>
      <Container>
        <Outlet />
      </Container>
      {/* <Loading className={loadingState? "show-load": "hide-load" } /> */}
      {loadingState && <Loading />}
      {/* {loadingState ? <Loading /> : null} */}
    </div>
  );
};
export default Body;
