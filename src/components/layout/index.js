import Footer from "./Footer/Footer";
import AppNav from "./AppNav/AppNav";
import Body from "./Body/Body";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <AppNav></AppNav>
      <Body><Outlet /></Body>
      <Footer></Footer>
    </>
  );
}

export default Layout;
