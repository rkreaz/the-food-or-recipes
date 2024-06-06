import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { getAuth } from 'firebase/auth';
import app from '../../../firebase/Firebase.config';

const auth = getAuth(app);

const Register = () => {
    const {createUser,} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photo, email, password );

         setError('');
         setSuccess('');

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Please add at least two uppercase');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)){
            setError('Please add at special character');
            return;
        }
        else if (password.length < 6 ){
            setError('password must 6 characters long');
            return;
        }



        createUser (email, password)
        .then(result => {
            const createUser = result.user;
            setSuccess('User login successful.')
            setError('')
            console.log(createUser);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleAccept =(event) => {
         setAccepted(event.target.checked);
    }

    return (
        <Container>
            <Form onSubmit={handleRegister} className='w-25 mx-auto mt-4'>
                <h4 className='mb-4 fw-semibold'>Register your account</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccept}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} />
                    </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-success">
                    Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
              
              <div className='text-center mt-3 mb-4'>
                  <p className='text-danger'>{error}</p>
                  <p className='text-success'>{success}</p>
              </div>

        </Container>
    );
};

export default Register;