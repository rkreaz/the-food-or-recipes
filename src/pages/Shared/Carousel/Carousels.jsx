import React from 'react';
import slide1 from '../../../assets/5.jpg'
import slide2 from '../../../assets/1.jpg'
import slide3 from '../../../assets/3.jpg'
import { Carousel } from 'react-bootstrap';


const Carousels = () => {
    return (
        <div>
               <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100 h-75" src={slide1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src={slide2} alt="First slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide3} alt="First slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Carousels;