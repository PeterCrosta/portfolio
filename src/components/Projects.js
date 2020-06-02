import React, {Component} from 'react'
import Project from './ProjectSingle'

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            projects: [{
                name: 'Delve.NYC',
                link: 'http://www.delve.nyc/',
                imgSource: '/Users/petercrosta/Desktop/personal-work/portfolio/images/DelveNYC-logo.jpg',
                description: 'A site for your next apartment hunt: Visualizing NYC quality-of-life data to help you pick a neighborhood before picking an apartment',
                technologies: ['Javascript', 'React', 'D3', 'Express', 'Mongodb', 'NYC Open Data api']
            }]
        }
    }
    render() {
        return (
            <div id='projects'>
                <h1>Projects</h1>
                <div className='container'>
                    {this.state.projects.map(project => (
                        <Project name={project.name}
                        link={project.link}
                        imgSource={project.imgSource}
                        description={project.description}
                        technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects