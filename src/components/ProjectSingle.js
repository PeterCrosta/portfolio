import React from 'react'

const Project = (props) => {
    const {idx, name, link, imgSource, description, technologies, githubLink} = props
    let leftyClass = 'project left-allign double-border'
    let rightyClass = 'project right-align double-border'
    return (
        <div className={idx % 2 === 1 ? rightyClass : leftyClass}>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <h2 className='title'>{name}</h2>
                <img alt='placeholder' src={imgSource}/>
                <p className='description'>{description}</p>
            </a>
            <h3>Technologies used:</h3>
            <div className='skills'>
                {technologies.map((tech, idx) => {
                    return idx === technologies.length - 1 ?    
                    (<span key={idx} className='single-technology'>{tech}</span>) :
                    (<span key={idx} className='single-technology'>{tech} - </span>)
                }
                )}
            </div>
            <a href={githubLink} className='github-link' target='_blank' rel="noopener noreferrer">
                <img alt='github' className='github-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY72H-Wfx7zWrrdzlPHL8o0nbcvs03YMlUgYoqUormf2b1DOy6&usqp=CAU' />
            </a>
        </div>
    )
}

export default Project