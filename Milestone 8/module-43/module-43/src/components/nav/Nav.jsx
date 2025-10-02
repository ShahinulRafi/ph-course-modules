import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <div className='bg-amber-200'>
            <h1 className='font-bold'>Static Routes</h1>
            <nav className='flex justify-center gap-5'> 
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="others">Others</Link>
            </nav>
        </div>
    );
};

export default Nav;