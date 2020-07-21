import React from 'react'
import Project from './ProjectSingle'
import projects from '../data/projectData'

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <div className='container' id='projects-container'>
                {projects.map((project, idx) => (
                    <Project 
                    key={idx}
                    name={project.name}
                    role={project.role}
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