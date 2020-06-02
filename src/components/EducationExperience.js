import React from 'react'
import columbia from '/Users/petercrosta/Desktop/personal-work/portfolio/src/data/columbia-logo.jpg'

function EducationExperience() {
    return (
        <div id='education-experience'>
            <h1>Education and Experience</h1>
            <div className='education'>
                <img alt='columbia' src={columbia} className='school-image' />
                <h3 className='school-name'>Columbia University</h3>
                <span className='degree'>Premedical Postbaccalaureate,</span> <span className='grad-date'>May, 2018</span>
                <p className='description'>Placeholder for description of program</p>
                <span>Coursework included </span> <span className='single-technology'>math, chem, phys, orgo, bio, neuropsychology</span>
            </div>
        </div>
    )
}

export default EducationExperience