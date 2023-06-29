import React from "react";
import  Nav from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MainNavbar = () => {
    return ( 
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home">FOODSPOT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link className="nav-links" href="#find">FIND A SPOT</Nav.Link>
                        <Nav.Link href="#saved">SAVED SPOTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
};
 
export default MainNavbar;