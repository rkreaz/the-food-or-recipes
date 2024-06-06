import React from 'react';
import Header from '../pages/Shared/header/Header';
import Footer from '../pages/Shared/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';


const FoodLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                     <Outlet></Outlet>
                    </Col>
                    
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
 
};

export default FoodLayout;