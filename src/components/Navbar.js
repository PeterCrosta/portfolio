import React from 'react'
import {Link} from 'react-router-dom'
import resumePDF from '/Users/petercrosta/Desktop/personal-work/portfolio/src/data/Crosta Peter Resume 2020 07 06.pdf'


function Navbar() {
    return (
        <div id='nav-bar'>
            <div id='banner'>
                <h1 id='banner-name'>Peter Crosta</h1>
            </div>
            <nav className='nav-item-container'>
                <Link className='nav-item' to='/about-me'>About Me</Link>
                <Link className='nav-item' to='/projects'>Projects</Link>
                <Link className='nav-item' to='/education-experience'>Education and Experience</Link>
                <Link className='nav-item' to='/contact-me'>Contact Me</Link>
                <a href={resumePDF} className='nav-item' target='_blank' rel="noopener noreferrer">Resume</a>
            </nav>
        </div>
    )
}

export default Navbar