import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';



const Food = () => {
    const food = useLoaderData();
    const { title, details, image_url, category_id } = food;
    console.log(food);

    return (
        <Container>
            <Card>
                <Card.Img className='mt-4' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All Food in this Home Page</Button>
                    </Link>
                </Card.Body>
            </Card>



        </Container>
    );
};

export default Food;