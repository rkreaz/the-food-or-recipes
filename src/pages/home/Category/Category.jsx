import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';
import { Col, Container, Row } from 'react-bootstrap';


const Category = () => {
    const { id } = useParams();
    const categoryFood = useLoaderData()
    // console.log(categoryFood);
    return (
        // <div className='food_container mt-1'>

        //     <div className='product_container mb-4'>

        //         {
        //             categoryFood.map(food => <FoodCard
        //                 key={food._id}
        //                 food={food}
        //             >
        //             </FoodCard>)
        //         }
        //     </div>
        // </div>
        <Container>
            <Row>

                {
                    categoryFood.map(food => <Col className='col-md-4'> <FoodCard
                        key={food._id}
                        food={food}
                    >
                    </FoodCard>    </Col>)
                }

            </Row>
        </Container>

    );
};

export default Category;