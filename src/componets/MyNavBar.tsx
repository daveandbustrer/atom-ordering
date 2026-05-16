import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import { NavLink as RouterLink } from "react-router-dom";
export default function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <NavbarBrand as={RouterLink} to="/" style={{ width: "35" }}>
          <img src="pizza.png" alt="logo" height="35" loading="lazy" />
        </NavbarBrand>
        <NavbarToggle aria-controls="main-navbar" />

        <NavbarCollapse id="main-navbar">
          <Nav className="ms-auto">
            <NavLink as={RouterLink} to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink as={RouterLink} to="/menu" className="nav-link">
              Menu
            </NavLink>

            <NavLink as={RouterLink} to="/cart" className="nav-link">
              Cart
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
