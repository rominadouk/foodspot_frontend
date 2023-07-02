import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Twitter, Facebook, Github, Pinterest } from "react-bootstrap-icons";



const Footer = () => {
    return ( 
        <div className="icon-div text-center">
            <Container className="icon-container pt-3">
                <Row>
                    <Col className="col-lg-1 offset-lg-4">
                        <Facebook className="icon"/>
                    </Col>
                    <Col className="col-lg-1">
                        <Github className="icon"/>
                    </Col>
                    <Col className="col-lg-1">
                        <Twitter className="icon"/>
                    </Col>
                    <Col className="col-lg-1">
                        <Pinterest className="icon"/>
                    </Col>
                </Row>
                <p className="mt-3">This project was built and designed by Romina Douk.</p>
            </Container>
        </div>
     );
}
 
export default Footer;