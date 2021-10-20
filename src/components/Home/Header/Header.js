import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () =>
{
    const { user, LogOut } = useAuth()
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
                            <NavLink
                                className="link"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/gallery"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                GALLERY
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/financing"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                FINANCING
                            </NavLink>
                            {
                                user.displayName && <h5 className="text-white">{user?.displayName}</h5>
                            }

                            {
                                user?.email ? <NavLink
                                    className="link"
                                    to="/login"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <Button onClick={LogOut}>LOGOUT</Button>
                                </NavLink> :
                                    <NavLink
                                        className="link"
                                        to="/login"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        LOGIN
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h2>This is Header</h2>