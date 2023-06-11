import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./AppNav.css";
import { useSelector } from "react-redux";

function AppNav({ children }) {
    const favoritesCounter = useSelector((state) => state.favorites.counter);

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleProfileDropdownToggle = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleProfileDropdownClose = () => {
    setShowProfileDropdown(false);
  };

  return (
    <Navbar bg="dark" expand="md" variant="dark" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyMoviesApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favorites">
              Favorites
              <span className="badge badge-warning ml-1">
                {favoritesCounter}
              </span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/search">
              Search
            </Nav.Link>
            <NavDropdown
              title="Profile"
              id="profile-dropdown"
              show={showProfileDropdown}
              onToggle={handleProfileDropdownToggle}
              onClose={handleProfileDropdownClose}>
              <NavDropdown.Item as={Link} to="/profile">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
