import React from 'react'

const Project = (props) => {
    const {name, link, imgSource, description, technologies} = props
    return (
        <div className='project'>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <h2 className='title'>{name}</h2>
                <img alt='placeholder' src={imgSource}/>
                <p className='description'>{description}</p>
            </a>
            <h3>Technologies used:</h3>
            <div className='skills'>
                {technologies.map(tech => (
                    <ul>{tech}</ul>
                ))}
            </div>
        </div>
    )
}

export default Project