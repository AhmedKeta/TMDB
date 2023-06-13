import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./AppNav.css";
import { useSelector } from "react-redux";
import LanguageContext from "../../../context/language";

function AppNav({ children }) {
  const { language, setLanguage } = useContext(LanguageContext);

  const favoritesCounter = useSelector((state) => state.favorites.list.length);

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleProfileDropdownToggle = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleProfileDropdownClose = () => {
    setShowProfileDropdown(false);
  };
  const changeLanguage = () => {
    localStorage.setItem("language", language === "en-us" ? "ar" : "en-us");
    setLanguage(language === "en-us" ? "ar" : "en-us");
  };
  return (
    <Navbar bg="dark" expand="md" variant="dark" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {language === "ar" ? "نجم سنيمائى" : "Movie Star"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              {language === "ar" ? "الرئيسية" : "Home"}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movies">
              {language === "ar" ? "الأفلام الشائعة" : "Movies"}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favorites">
              {language === "ar" ? "الأفلام المفضلة" : "Favorites"}

              <span className="badge badge-warning ml-1">
                {favoritesCounter}
              </span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/search">
              {language === "ar" ? "بحث" : "Search"}
            </Nav.Link>
            <NavDropdown
              title={language === "ar" ? "الصفحة الشخصية" : "Profile"}
              id="profile-dropdown"
              show={showProfileDropdown}
              onToggle={handleProfileDropdownToggle}
              onClose={handleProfileDropdownClose}>
              <NavDropdown.Item as={Link} to="/profile">
                {language === "ar" ? "تعديل" : "Edit Profile"}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/register">
                {language === "ar" ? "انشاء صفحة" : "Register"}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                {language === "ar" ? "تسجيل الدخول/ الخروج" : "Login/ Logout"}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={changeLanguage}>
                {language === "ar" ? "اللغة" : "language"}

                <span className="badge bg-secondary ml-1">{language}</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
