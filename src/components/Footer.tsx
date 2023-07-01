import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Twitter, Facebook, Github, Pinterest } from "react-bootstrap-icons";



const Footer = () => {
    return ( 
        <div className="icon-div">
            <Container className="icon-container">
                <Row>
                    <Col className="col-lg-1">
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
            </Container>
        </div>
     );
}
 
export default Footer;