import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css'

const Header = () =>
{
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo__img" src="https://i.ibb.co/3d9qRs0/Logo-Makr-1-YLHgn.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">Financing</Nav.Link>
                            <Nav.Link href="#pricing">Register</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h2>This is Header</h2>