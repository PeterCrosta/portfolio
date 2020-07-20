import React from 'react'
import deployPNG from '../data/webImage.png'

const Project = (props) => {
    const {name, link, imgSource, description, technologies, githubLink} = props
    return (
        <div className='project double-border'>
            <div>
                <h2 className='title'>{name}</h2>
                <img alt='placeholder' className='project-image' src={imgSource}/>
                <p className='description'>{description}</p>
            </div>
            <h3>Technologies used:</h3>
            <div className='skills'>
                {technologies.map((tech, idx) => {
                    return idx === technologies.length - 1 ?    
                    (<span key={idx} className='single-technology'>{tech}</span>) :
                    (<span key={idx} className='single-technology'>{tech} - </span>)
                }
                )}
            </div>
            <div className='project-link-container'>
                {link.length > 0 ? (
                    <div className='link-button'>
                        <a href={link} className='github-link' target='_blank' rel='noopener noreferrer'>
                            deployed <img alt='github' className='github-image' src={deployPNG} />
                        </a>
                    </div>
                ) : (<div></div>)}
                <div className='link-button'>
                    <a href={githubLink} className='github-link' target='_blank' rel='noopener noreferrer'>
                        repository
                        <img alt='github' className='github-image' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project