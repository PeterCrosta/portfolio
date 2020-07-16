import React from 'react'

const Project = (props) => {
    const {name, link, imgSource, description, technologies, githubLink} = props
    return (
        <div className='project double-border'>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <h2 className='title'>{name}</h2>
                <img alt='placeholder' className='project-image' src={imgSource}/>
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