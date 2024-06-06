import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Blog.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Blog = () => {
    
    return (
        <Container>
            <ul className="list-group">
                <h1 className='text-center mt-4 fw-semibold'>Question And Answer</h1>
                <li className="list-group-item mt-4">
                    <h3 className='fw-semibold mt-3 mb-3 blog_bg'>01. Tell us the differences between uncontrolled and controlled components. ?</h3>
                    <p>In React, forms can be implemented using either controlled components or uncontrolled components. The main differences between these two approaches are: Controlled Components: In a controlled component, the form data is handled by React component state. The state is updated in response to changes in the form's input elements. Thus, React has complete control over the form's data. To implement a controlled component, each input element must have a corresponding onChange event handler that updates the state. Uncontrolled Components: In an uncontrolled component, the form data is handled by the form's DOM nodes. The data is accessed using JavaScript and not React. In this approach, we can use the ref attribute to get the value of the form's input elements. This means that React doesn't have any control over the form's data. In summary, the key differences between controlled and uncontrolled components are: In controlled components, React manages the state and updates the form's input elements. In uncontrolled components, the form data is managed by the DOM nodes. In controlled components, the form's data can be validated and manipulated before it is submitted. In uncontrolled components, the data must be validated and manipulated after it is submitted. Controlled components can make it easier to implement complex forms, but can be more verbose. Uncontrolled components are usually simpler to implement, but can be harder to maintain.</p>
                </li>
                <li className="list-group-item">
                    <h3 className='fw-semibold mt-3 mb-3 blog_bg'>02. How to validate React props using PropTypes ?</h3>
                    <p>PropTypes is a useful library that allows you to validate the type and shape of the props that are passed to your React components. It is a built-in library in React that enables you to check the type of props that you pass to a component, thus helping you to catch potential bugs earlier. In summary, PropTypes is a useful tool that enables you to validate the type and shape of props passed to your components. By using PropTypes, you can catch potential errors earlier and reduce the risk of bugs in your code.</p>
                </li>
                <li className="list-group-item">
                    <h3 className='fw-semibold mt-3 mb-3 blog_bg'>03.Tell us the difference between nodejs and express js ?</h3>
                    <p>Node.js and Express.js are two popular technologies used in web development, but they serve different purposes. Node.js is a server-side platform that allows developers to build server-side applications using JavaScript. It provides a runtime environment for executing JavaScript code outside of a web browser, allowing developers to build scalable and high-performance web applications. Node.js includes a set of built-in modules that provide basic functionality such as file system access, networking, and HTTP request/response handling. Express.js is a web framework that runs on top of Node.js, providing a set of additional features for building web applications. It simplifies the development of web applications by providing a set of abstractions over the low-level HTTP APIs provided by Node.js. Express.js includes a range of middleware that can be used to add functionality such as authentication, routing, and handling of HTTP requests and responses. In summary, Node.js is a platform that allows developers to run JavaScript code on the server-side, while Express.js is a web framework that makes it easier to build web applications on top of Node.js by providing a set of higher-level abstractions and features.</p>
                </li>
                <li className="list-group-item">
                    <h3 className='fw-semibold mt-3 mb-3 blog_bg'>04. What is a custom hook, and why will you create a custom hook?</h3>
                    <p>In React, a custom hook is a function that allows you to reuse stateful logic across different components. It is a way to abstract away complex logic from components, making them more readable and maintainable. A custom hook typically consists of pure functions that take some parameters and return data, usually in the form of state variables and functions to manipulate that state. These functions can be reused in multiple components, allowing for a more modular and reusable codebase. Custom hooks can be created for various purposes, such as managing state, fetching data from an API, handling form input, and more. Creating a custom hook allows you to extract reusable logic and makes it easier to share that logic across multiple components. Some benefits of using custom hooks include: Reusability: Custom hooks allow you to write reusable code that can be used in multiple components. Abstraction: Custom hooks abstract away complex logic, making components simpler and more readable. Separation of concerns: Custom hooks separate the logic of your application from the UI, making it easier to test and maintain your code. Overall, custom hooks are a powerful tool for creating reusable and maintainable code in React.</p>
                </li>
            </ul>

            <div className='text-center mt-4 mb-4'>
                <Link to={'/category/0'}>
                    <Button className='p-2' variant="danger"> <FaArrowLeft></FaArrowLeft> Back to Home</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Blog;