import React from 'react';
import { Button, Card, Container, Image, } from 'react-bootstrap';
import './FoodCard.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import moment from 'moment';

const FoodCard = ({ food }) => {
    const { _id, title, details, image_url, author } = food

    return (
        <>
            <Card className='mt-4 food_card' style={{ width: '16rem', height: '550px' }}>

                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Image style={{ height: '55px', width: '55px' }} src={author?.img} roundedCircle />
                    </div>
                    <div>
                        <h6>{author.name}</h6>
                        <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                    </div>

                </Card.Header>

               
                    <Card.Img className='food_img' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details.length < 150 ? <>{details}</> :
                                <>{details.slice(0, 150)}...<Link to={`/food/${_id}`}>Read More</Link></>}
                        </Card.Text>
                    </Card.Body>
               
                <Link to={`/details/${_id}`}>
                    <Button className='p-2 px-5' variant="danger"> Show Food Details <FaArrowRight className='ms-1'></FaArrowRight> </Button>
                </Link>
            </Card>

        </>

    );
};

export default FoodCard;

