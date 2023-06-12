import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
// import { HomePage, MoviePage, SearchPage } from "../pages";
import Layout from "../components/layout";
import {
  Favourites,
  Home,
  Login,
  Movies,
  NotFound,
  Profile,
  Register,
  Search,
  Movie,
} from "../pages";
// const Favourites = lazy(() => import("../pages/Favourites/Favourites"));
// const Home = lazy(() => import("../pages/Home/Home"));
// const Login = lazy(() => import("../pages/Login/Login"));
// const Movies = lazy(() => import("../pages/Movies/Movies"));
// const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
// const Profile = lazy(() => import("../pages/Profile/Profile"));
// const Register = lazy(() => import("../pages/Register/Register"));
// const Search = lazy(() => import("../pages/Search/Search"));
// const Movie = lazy(() => import("../pages/Movie/Movie"));
// const {
//   Favourites,
//   Home,
//   Login,
//   Movies,
//   NotFound,
//   Profile,
//   Register,
//   Search,
//   Movie,
// } = lazy(() => import("../pages/index"));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
