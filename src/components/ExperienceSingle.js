import React from 'react'

const ExperienceSingle = props => {
 const {org, title, dates, location, resp} = props
 return (
     <div className="experience-single">
        <div className="experience-titles">
             <span className="org-title">{org}, {title}</span>
             <span className="dates">{dates[0]} - {dates[1]}</span>
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