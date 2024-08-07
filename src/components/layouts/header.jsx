import React,{useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/headerStyle.css";
import Logo from "../../assets/logo/logo.png";
function Header() {

const [nav,setNav]=useState(false);

const changeValueOnScroll = () => {
  const scrollValue = document?.documentElement?.scrollTop;
  scrollValue = nav > 100
}
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/offer">
                Offer
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About US
              </Nav.Link>

              <Nav.Link className="login" as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link className="signup" as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i class="bi bi-cart fs-5"></i>
                  <em className="roundpoint">1</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
