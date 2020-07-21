import React from 'react'
import ExperienceSingle from './ExperienceSingle'
import workHistory from '../data/workHistory'

const Experience = (props) => {
    return (
        <div id='experience'>
            <h1 className='section-header'>Experience</h1>
            <div className='experience-container'>
                {workHistory.map((job, idx) => (
                    <ExperienceSingle
                    key={idx}
                    idx={idx}
                    org={job.org}
                    title={job.title}
                    dates={job.dates}
                    location={job.location}
                    resp={job.resp} />
                ))}
            </div>
        </div>
    )
}

export default Experience