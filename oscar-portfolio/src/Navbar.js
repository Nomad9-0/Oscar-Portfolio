import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css';

function Navigation() {
    return(
    <>
        <Navbar className="navigation">
            <Navbar.Brand href="#home">Oscar Jimenez</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
        </Navbar>
    </>
    )
}

export default Navigation;