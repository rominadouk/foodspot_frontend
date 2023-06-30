import React from "react";
import './HomePage.css'
import { Container, Row, Col } from "react-bootstrap";



const JustVisited = () => {
    return ( 
        <>
            <h2 className='text-center mt-5 just-visited'>Just Visited</h2>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <div className='just-visited-image col-lg-7 d-none d-lg-block'></div>
                    </Col>
                    <Col className='col-12 col-lg-5'>
                        <h3>Food Spot</h3>
                        <p>City, State</p>
                        <div className='just-visited-image col-lg-7 d-block d-lg-none mb-3'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem deserunt ducimus reiciendis voluptates earum sequi quae! Voluptatibus iusto sit adipisci voluptatum neque magnam reiciendis consectetur. Aspernatur ipsa nostrum optio.</p>
                        <button className="mb-5">Show Me This Spot</button>
                    </Col>
                </Row>
            </Container>
            <div className="bottom-divider"></div>
        </>
     );
}
 
export default JustVisited;