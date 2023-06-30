import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Favorites = () => {
    return ( 
        <>
        <h2 className="text-center">Favorites</h2>
        <Container>
            <Row>
                <Col className="col-12 col-lg-4 mb-4">
                    <div className='favorite-spot' id='favorite-1'></div>
                </Col>
                <Col className="col-12 col-lg-4 mb-4">
                    <div className='favorite-spot' id='favorite-2'></div>
                </Col>
                <Col className="col-12 col-lg-4 mb-4">
                    <div className='favorite-spot' id='favorite-3'></div>
                </Col>
            </Row>
        </Container>
            <div className="bottom-divider"></div>

        </>
     );
}
 
export default Favorites;