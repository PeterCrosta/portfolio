import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav id='nav-bar'>
                <Link className='nav-item' to='/about-me'>About Me</Link>
                <Link className='nav-item' to='/projects'>Projects</Link>
                <Link className='nav-item' to='/experience'>Experience</Link>
                <Link className='nav-item' to='/education'>Education</Link>
                <Link className='nav-item' to='/contact-me'>Contact Me</Link>
            </nav>
        </div>
    )
}

export default Navbar