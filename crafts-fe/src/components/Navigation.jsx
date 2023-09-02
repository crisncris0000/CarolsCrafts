import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Shopping from './Shop/Shopping';
import AddForm from '../components/Shop/AddForm';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Login/RegisterForm';
import Transaction from './Transaction/TransactionHistory';
import ResetForm from './Login/ResetForm';
import Portfolio from './Portfolio/Portfolio';
import { useSelector } from 'react-redux';
import NewPost from './Portfolio/NewPost';
import ShoppingCart from './Cart/ShoppingCart';
import PaymentProcess from './Payment/PaymentProcess';

export default function Navigation() {

  const user = useSelector((states) => states.user.value);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
  }

  return (
    <Router>
      <Navbar expand="md" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-item">
            Carol Mckenna
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
              <Nav.Link as={Link} to="/portfolio" className="nav-item">
                Portfolio
              </Nav.Link>
              <NavDropdown title = "Account"id="basic-nav-dropdown" className="dropdown">
                {user.email === '' ? <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item> : null}
                {user.email !== '' ? <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item> : null}
                <NavDropdown.Item as={Link} to="/my-cart">Shopping Cart</NavDropdown.Item>
                {user.email !== '' ?<NavDropdown.Item as={Link} to="/transaction-history">
                  Transaction History
                </NavDropdown.Item> : null}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/add-form" element={<AddForm />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/transaction-history" element={<Transaction />} />
        <Route path="/reset-password" element={<ResetForm />}/>
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/my-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<PaymentProcess />} />
      </Routes>
    </Router>
  );
}

