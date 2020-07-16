import React from 'react'

let righty = "experience-single double-border right-align"

const ExperienceSingle = props => {
 const {idx, org, title, dates, location, resp} = props
 return (
     <div className={idx % 2 === 0 ? "experience-single double-border" : righty}>
        <div className="experience-titles">
            <div className='org-job-date-container' >
                <div className='org-job'>
                    <span className="org title">{org}</span>
                    <span className="job-title">, {title}</span>
                </div>
                <div className='dates-container'>
                    <span className="dates right-align"> {dates[0]} - {dates[1]}</span>
                </div>
            </div>
        </div>
        <div className="location">{location}</div>
        <ul className="resp-container">
            {resp.map((el, idx) => (
                <li key={idx}>{el}</li>
            ))}
        </ul>
     </div>
 )
}


export default ExperienceSingle