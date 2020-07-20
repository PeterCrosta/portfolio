import React from 'react'
import EducationSingle from './EducationSingle'
import educationHistory from '../data/educationHistory'

function Education() {
    return (
        <div id='education'>
            <h1 className='section-header'>Education</h1>
            <div className='education-container'>
                {educationHistory.map((school,idx)=> (
                    <EducationSingle 
                    key={idx}
                    idx={idx}
                    name={school.name}
                    degree={school.degree}
                    honors={school.honors}
                    gpa={school.gpa}
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

export default Education