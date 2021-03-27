import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="transparent" variant="light" expand="lg">
                <Navbar.Brand href="/">
                    <span className="navbarBrand"> <span className="text-white">POWER</span> <span className="text-warning">X</span></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-2 h5 navLink" href="/">Home</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="/">Services</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="/class/Our Class">Our Classes</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="/">About Us</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="/">Blog</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="/">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;