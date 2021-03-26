import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="transparent" variant="light" expand="lg">
                <Navbar.Brand href="#">
                    <span className="navbarBrand">POWER X</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-2 h5 navLink" href="#home">Home</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="#features">Services</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="#pricing">Our Classes</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="#home">About Us</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="#features">Blog</Nav.Link>
                        <Nav.Link className="mr-2 h5 navLink" href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;