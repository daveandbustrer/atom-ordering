import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import { NavLink as RouterLink } from "react-router-dom";
type cartitem = {
  name: string;
  amount: number;
};
interface Prop {
  cart: cartitem[];
}
export default function MyNavBar({ cart }: Prop) {
  let sum = 0;
  cart.map((item) => {
    sum += item.amount;
    console.log(sum);
    return sum;
  });
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      style={{ width: "35" }}
    >
      <Container fluid>
        <NavbarBrand as={RouterLink} to="/" style={{ height: "35" }}>
          <img src="pizza.png" alt="logo" height="35" loading="lazy" />
        </NavbarBrand>
        <NavbarToggle aria-controls="main-navbar" />

        <NavbarCollapse id="main-navbar">
          <Nav className="ms-auto">
            <NavLink as={RouterLink} to="/" className=" fs-4">
              Home
            </NavLink>

            <NavLink as={RouterLink} to="/menu" className=" fs-4">
              Menu
            </NavLink>

            <NavLink as={RouterLink} to="/cart" className=" fs-4">
              cart
              {cart.length > 0 && (
                <Badge
                  pill
                  className="translate-middle bg-danger px-1 py-0 fs-6"
                >
                  <small>{sum}</small>
                </Badge>
              )}
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
