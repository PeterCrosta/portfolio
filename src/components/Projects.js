import React from 'react'
import Project from './ProjectSingle'
import projects from '../data/projectData'

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <div className='container'>
                {projects.map(project => (
                    <Project name={project.name}
                    link={project.link}
                    imgSource={project.imgSource}
                    description={project.description}
                    technologies={project.technologies}
                    githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects