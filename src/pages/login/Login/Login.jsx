import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/Firebase.config';


const Login = () => {
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('Login page location', location);
   


    const handleSignIm = (event) => {
        const form = location.state?.from?.pathname || '/category/0';
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        const form = location.state?.from?.pathname || '/category/0';
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGitHubSingIn = () => {
        const form = location.state?.from?.pathname || '/category/0';
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
   

    return (
        <div>
            <Container>
                <Form onSubmit={handleSignIm} className='w-25 mx-auto mt-4'>
                    <h4 className='mb-4 fw-semibold'>Login your account</h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type='submit'>Login</Button>

                    {/* <Button  variant="primary" type="submit">
                        <Link className="text-success">Login</Link>
                    </Button> */}
                    <br />
                    <Form.Text >
                        Login your account?
                        <Link to='/register'> Register</Link>
                    </Form.Text>

                </Form>
                <div className='text-center d-flex justify-content-center mt-4'>
                    <p onClick={handleGoogleSingIn} className='mb-2 px-4 ' variant="outline-success"> <Link><FaGoogle className='me-2'></FaGoogle>Login With Google</Link> </p>


                    {/* <Link to={`/category/${category_id}`}>
                            <Button onClick={handleGoogleSingIn} className='mb-2 px-4' variant="outline-success"> <FaGoogle className='me-4'></FaGoogle>Login With Google</Button>
                        </Link> */}

                    <p onClick={handleGitHubSingIn} className='px-4' variant="outline-success"><Link><FaGithub className='me-2'></FaGithub>Login With GtiHub</Link></p>
                </div>
            </Container>
            
        </div>
    );
};
export default Login;