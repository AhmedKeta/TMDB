// import Favourites from "./Favourites/Favourites";
// import Home from "./Home/Home";
// import Login from "./Login/Login";
// import Movies from "./Movies/Movies";
// import NotFound from "./NotFound/NotFound";
// import Profile from "./Profile/Profile";
// import Register from "./Register/Register";
// import Search from "./Search/Search";
// import Movie from "./Movie/Movie";
// export {
//   Favourites,
//   Home,
//   Login,
//   Movies,
//   NotFound,
//   Profile,
//   Register,
//   Search,
//   Movie,
// };

import { lazy } from "react";

const Favourites = lazy(() => import("./Favourites/Favourites"));
const Home = lazy(() => import("./Home/Home"));
const Login = lazy(() => import("./Login/Login"));
const Movies = lazy(() => import("./Movies/Movies"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Profile = lazy(() => import("./Profile/Profile"));
const Register = lazy(() => import("./Register/Register"));
const Search = lazy(() => import("./Search/Search"));
const Movie = lazy(() => import("./Movie/Movie"));
export {
  Favourites,
  Home,
  Login,
  Movies,
  NotFound,
  Profile,
  Register,
  Search,
  Movie,
};
