import React from "react";
import './HomeImage.css'
import './Navbar.css'
import  Nav from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const ramenImage = require('../assets/ramen2.jpg')

const HomeImage = () => {

    
    return (
        <>
        <div className='home-image' title="Ramen Bowl Image">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="nav-link" id="foodspot-font" href="#home">FOODSPOT</Navbar.Brand>
                    <Navbar.Toggle className='navbar-toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end custom-navbar-links" id="basic-navbar-nav">
                        <Nav className="ml-auto nav-link">
                            <Nav.Link href="#find">FIND A SPOT</Nav.Link>
                            <Nav.Link href="#saved">SAVED SPOTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        {/* <div id='home-image'>
            <img id='ramen' src={ramenImage} alt="Ramen" />
        </div> */}
        </>
     );
}
 
export default HomeImage;
