import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Shopping from './Shop/Shopping';
import AddForm from '../components/Shop/AddForm';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Register/RegisterForm';
import Transaction from './Transaction/TransactionHistory';
import Dashboard from './Dashboard/Dashboard';

export default function Navigation() {
  return (
    <Router>
      <Navbar expand="md" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} id="logo" alt="Logo saying Mckcreations" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-item">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-item">
                Blog
              </Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown" className="dropdown">
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Manage Account</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transaction-history">
                  Transaction History
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/dashboard"}>Dashboard</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/add-form" element={<AddForm />} />
        <Route path="/blog" element={""} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/transaction-history" element={<Transaction />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

