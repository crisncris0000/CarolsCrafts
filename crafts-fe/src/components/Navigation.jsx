import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

export default function Navigation() {
  return (
    <Router>
      <Navbar data-bs-theme="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand><img src={Logo} id="logo" alt="Logo saying Mckcreations"></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"} className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} className="nav-item">Shop</Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
