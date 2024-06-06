import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManuBar.css'
import { AuthContext } from '../../../provider/AuthProvider';


const ManuBar = () => {
    const { user, logOut } = useContext(AuthContext);
   
 

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar className='menu_bar_bg' collapseOnSelect expand="lg">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold menu_bar">
                        <Link to={'/category/0'}>Home</Link>
                            <Link to='#'> Recent Recipes</Link>
                            <Link to={`/category/0`}> Recipe Details</Link>
                            <Link to='blog'>  Blog</Link>
                            <Link to='contact'>  Contact</Link>
                        </Nav>
                        <Nav className='me-4'>
                            {user && (
                                <img className="person" src={user?.photoURL} alt="" />
                            )}

                            {user ?
                                <Button onClick={handleLogOut} variant="primary">LogOut</Button> :
                                <Link to='/login'>
                                    <Button variant="primary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
          
            


        </div>
    );
};

export default ManuBar;