import React from 'react';
import { Container } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container>
            <ul className="list-group">
                <h1 className='text-center mt-4 fw-semibold'>Healthy Food Recipes Contact Area</h1>
                <li className="list-group-item mt-4">
                    <h3 className='fw-semibold mt-3 mb-3'>Contact Area:</h3>
                    <p>Dhaka Bangladesh</p>

                </li>
                <li className="list-group-item">
                    <h3 className='fw-semibold mt-3 mb-3'>Contact Form:</h3>
                    <p>Fill out the contact form below with your name, email address, and message. We'll make sure to respond to you as soon as possible.</p>

                </li>
                <li className="list-group-item">
                    <h3 className='fw-semibold mt-3 mb-3'>Email:</h3>
                    <p>Send us an email at [email protected] with your inquiry or feedback. We strive to reply within 24 hours during weekdays.</p>

                </li>
                <li className="list-group-item">
                    <h3 className='fw-semibold mt-3 mb-3'>Recipe Submissions:</h3>
                    <p>If you have a healthy and delicious recipe that you'd like to share with us, we'd be thrilled to feature it on our website! Submit your recipe through our dedicated submission form: [Recipe Submission Form Link]</p>

                </li>
            </ul>

        </Container>
    );
};

export default Contact;