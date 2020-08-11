import React from "react";
import {Route, Link} from 'react-router-dom';
import {button, Navbar} from 'reactstrap';

export const Nav = () => {
    return(
        <div>
            <Navbar>
                <h1>Something Something Darkside...</h1>
                <Link to={'/'}>
                    <Button>Home</Button>
                </Link>
                <Link to={'/register'}>
                    <Button>Register</Button> 
                </Link>
                <Link to={'/login'}>
                    <Button>Log-In</Button>
                </Link>
            </Navbar>
        </div>
    )
}