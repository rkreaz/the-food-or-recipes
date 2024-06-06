import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/footer/Footer';


const DetailsLayout = () => {
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

export default DetailsLayout;