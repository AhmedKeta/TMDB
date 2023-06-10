import { Route, Router, Routes } from "react-router-dom";
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
