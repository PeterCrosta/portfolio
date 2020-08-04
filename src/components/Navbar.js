import React from 'react'
import {Link} from 'react-router-dom'
import resumePDF from '/Users/petercrosta/Desktop/personal-work/portfolio/src/data/Peter Crosta Resume 2020 07 28.pdf'
import logo from '/Users/petercrosta/Desktop/personal-work/portfolio/src/data/peter logo off white.png'


function Navbar() {
    return (
        <div id='nav-bar'>
            <div id='banner'>
                <img alt='banner-logo' id='logo' src={logo} />
            </div>
            <nav className='nav-item-container'>
                <Link className='nav-item' to='/about-me'>About Me</Link>
                <Link className='nav-item' to='/projects'>Projects</Link>
                <Link className='nav-item' to='/education'>Education</Link>
                <Link className='nav-item' to='/experience'>Experience</Link>
                <Link className='nav-item' to='/contact-me'>Contact Me</Link>
                <a href={resumePDF} className='nav-item' target='_blank' rel='noopener noreferrer'>Resume</a>
            </nav>
        </div>
    )
}

export default Navbar