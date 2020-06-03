import React from 'react'
import EducationSingle from './EducationSingle'
import educationHistory from '../data/educationHistory'

function EducationExperience() {
    return (
        <div id='education-experience'>
            <h1>Education and Experience</h1>
            <div className='education'>
                {educationHistory.map(school=> (
                    <EducationSingle 
                    name={school.name}
                    degree={school.degree}
                    gradDate={school.gradDate}
                    description={school.description}
                    coursework={school.coursework}
                    image={school.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default EducationExperience