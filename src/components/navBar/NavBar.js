import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar bg="transparent" variant="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/" className="navbarBrand text-decoration-none"> <span className="text-white">POWER</span> <span className="text-warning">X</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="mr-3 h5 navLink text-decoration-none" to="/">Home</Link>
                        <Link className="mr-3 h5 navLink text-decoration-none" to="/">Services</Link>
                        <Link className="mr-3 h5 navLink text-decoration-none" to="/class/our class">Our Classes</Link>
                        <Link className="mr-3 h5 navLink text-decoration-none" to="/">About Us</Link>
                        <Link className="mr-3 h5 navLink text-decoration-none" to="/">Blog</Link>
                        <Link className="mr-3 h5 navLink text-decoration-none" to="/">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;