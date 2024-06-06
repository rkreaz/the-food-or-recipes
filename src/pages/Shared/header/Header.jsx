import React from 'react';
import logo from '../../../assets/logo.png'
import logo2 from '../../../assets/tt.png'



import { Button, Carousel, Container, Image } from 'react-bootstrap';
import moment from 'moment/moment';
import './Header.css'
import ManuBar from '../ManuBar/ManuBar';
import Marquee from "react-fast-marquee";
import Carousels from '../Carousel/Carousels';


const Header = () => {
    return (
        <div>
            <Container className='d-flex mt-4 justify-content-between align-items-center'>
                <div>
                    <img src={logo} alt="" />

                </div>
                <div className='text-center'>
                    <Image className='header_img' src={logo2} roundedCircle />
                    <p className='fw-semibold header_text'>HEALTHY<small className='header_size'>FOOD</small>RECIPE</p>

                    <h5 className='fw-semibold'>{moment().format("dddd, MMMM D, YYYY")}</h5>
                </div>
            </Container>
            <div>
                <ManuBar></ManuBar>
                <Carousels></Carousels>
            </div>
            <Container>
                <div className='d-flex mt-2 align-items-center'>
                    <h5 className='p-3 food_introduction fw-semibold'>Introduction:</h5>
                    <Marquee className='text-danger fw-semibold'>
                    Preface your recipe with a short intro that shows readers your personal relationship to this dish. For example, write why it's important and what occasion it could be cooked/baked on. This is also a good section to state how many the recipe serves, the prep time, and the overall cook time.
                    </Marquee>
                </div>
            </Container>
        </div>
    );
};

export default Header;