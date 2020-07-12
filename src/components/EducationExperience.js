import React from 'react'
import EducationSingle from './EducationSingle'
import ExperienceSingle from './ExperienceSingle'
import educationHistory from '../data/educationHistory'
import workHistory from '../data/workHistory'

function EducationExperience() {
    return (
        <div id='education-experience'>
            <h1 className='section-header'>Education</h1>
            <div className='education-container'>
                {educationHistory.map((school,idx)=> (
                    <EducationSingle 
                    key={idx}
                    name={school.name}
                    degree={school.degree}
                    gradDate={school.gradDate}
                    description={school.description}
                    coursework={school.coursework}
                    image={school.image}
                    />
                ))}
            </div>
            <h1 className='section-header'>Experience</h1>
            <div className='experience-container'>
                {workHistory.map((job, idx) => (
                    <ExperienceSingle
                    key={idx}
                    org={job.org}
                    title={job.title}
                    dates={job.dates}
                    locatoin={job.location}
                    resp={job.resp} />
                ))}
            </div>
        </div>
    )
}

export default EducationExperience