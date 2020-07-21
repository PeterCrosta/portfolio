import React from 'react'

// let righty = 'experience-single double-border right-align'

const ExperienceSingle = props => {
 const {org, title, dates, location, resp} = props
 return (
     <div className='experience-single double-border'>
        <div className='experience-titles'>
            <div className='org-job-date-container' >
                <div className='org-job'>
                    <span className='org title'>{org}</span>
                    <i className='job-title'>, {title}</i>
                    <span className='location'>, {location}</span>
                </div>
                <div className='dates-container'>
                    <span className='dates right-align'> {dates[0]} - {dates[1]}</span>
                </div>
            </div>
        </div>
        <ul className='resp-container'>
            {resp.map((el, idx) => (
                <li key={idx}>{el}</li>
            ))}
        </ul>
     </div>
 )
}


export default ExperienceSingle