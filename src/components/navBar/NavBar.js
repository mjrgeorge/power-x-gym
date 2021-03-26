import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="transparent" variant="light">
            <Navbar.Brand href="#"><big>POWER X</big></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link className="mr-2 h5" href="#home">Home</Nav.Link>
                <Nav.Link className="mr-2 h5" href="#features">Services</Nav.Link>
                <Nav.Link className="mr-2 h5" href="#pricing">Our Classes</Nav.Link>
                <Nav.Link className="mr-2 h5" href="#home">About Us</Nav.Link>
                <Nav.Link className="mr-2 h5" href="#features">Blog</Nav.Link>
                <Nav.Link className="mr-2 h5" href="#pricing">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;