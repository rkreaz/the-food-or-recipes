import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { FaArrowLeft, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import moment from 'moment';


const ShowDetails = () => {
    const ShowDetails_data = useLoaderData();
    const { _id, title, image_url, details, author, rating, total_view, category_id } = ShowDetails_data;
    console.log(ShowDetails_data);


    return (
        <Container>
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '50px' }} src={author.img} roundedCircle />
                <div className=' ps-3 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                </div>
            </Card.Header>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>{total_view}
                    </div>
                </Card.Footer>
            </Card>



            <div className='text-center mt-4 mb-4'>
                <Link to={`/category/${category_id}`}>
                    <Button className='p-2' variant="danger"> <FaArrowLeft></FaArrowLeft> Back to Home Page</Button>
                </Link>
            </div>
        </Container>
    );
};

export default ShowDetails;