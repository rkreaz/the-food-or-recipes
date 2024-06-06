import React, { useEffect, useState } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import './RightNav.css'
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/Firebase.config';

const RightNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-food-or-server-rkreaz.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='mt-4' >
            <div className='text-center'>
                <Button onClick={handleGoogleSingIn} className='mb-2 px-4' variant="outline-success"> <FaGoogle className='me-4'></FaGoogle>Login With Google</Button>

                <Button className='px-4' variant="outline-success"><FaGithub className='me-4'></FaGithub>Login With GtiHub</Button>
            </div>
            <div className='mt-4 p-2 right_nav'>
                <h5>Food Items</h5>
                <div className=''>
                    {
                        categories.map(category => <p
                            key={category.id}
                        >
                            <ListGroup>
                                <ListGroup.Item><Link to={`/category/${category.id}`} className='food_items'>{category.name} </Link></ListGroup.Item>
                            </ListGroup>
                        </p>)
                    }
                </div>
            </div>
            <Container>
                <h3 className='fw-semibold'>Get Social</h3>
                <div className='d-flex gap-2 text-center mt-4 text-white'>
                    <div className='get_social_fac p-2'>
                        <Link to='https://www.facebook.com/' target='blank'>
                            <h5 className='mb-2'><FaFacebookF ></FaFacebookF></h5>
                            <span className='social_fac'>60.5K </span>
                            <span className='social_fac'>LIKES</span>
                        </Link>

                    </div>
                    <div className='get_social_twi p-2'>
                       <Link to='https://twitter.com/' target='blank'>
                       <h5 className='mb-2'><FaTwitter></FaTwitter> </h5>
                        <span>60.5K </span>
                        <span>LIKES</span>
                       </Link>


                    </div>
                    <div className='get_social_goo p-2'>
                        <Link to='https://www.google.com/' target='blank'>
                        <h5 className='mb-2'><FaGoogle></FaGoogle></h5>
                        <span>60.5K </span>
                        <span>LIKES</span>
                        </Link>
                    </div>



                </div>
            </Container>

        </Container>
    );
};

export default RightNav;