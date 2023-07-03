import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Recommendation = () => {
    return ( 
        <>
        <Container className="mb-5">
            <Row>
                <Col className="col-4 offset-1 text-center  col-lg-4 offset-lg-3">
                    <h3>Know a good Food Spot? Recommend it!</h3>
                </Col>
                <Col className="col-4 offset-1 col-lg-2 offset-lg-1">
                    <input className='mb-2' type='text' placeholder="City, State" />
                    <input className='mb-2' type='text' placeholder="Type of Cuisine" />
                    <input type='tips' placeholder="Any Tips?" />
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Recommendation;