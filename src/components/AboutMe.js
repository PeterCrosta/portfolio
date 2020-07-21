import React from 'react'
import SkillList from './SkillList'
import harry1 from '../data/IMG-0008.JPG'
import harry2 from '../data/IMG-0023.JPG'
import harry3 from '../data/IMG-0032.JPG'
import harry4 from '../data/IMG-0062.JPG'
import harry5 from '../data/IMG-1740.jpg'
import headshot from '../data/headshot.jpeg'

class AboutMe extends React.Component {
    constructor() {
        super()
        this.state = {
            harryArr: [harry1, harry2, harry3, harry4, harry5]
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleOff = this.handleOff.bind(this)
    }

    handleHover(event) {
        let harry = this.state.harryArr[Math.floor(Math.random()*this.state.harryArr.length)]
        let pic = document.getElementsByClassName('head-shot')
        pic[0].src = harry
    }
    handleOff(event) {
        let pic = document.getElementsByClassName('head-shot')
        pic[0].src = headshot 
    }
    render () {
        return (
            <div id='about-me' className='container'>
                <h1>About Me</h1>
                <div id='about-me-container' className='double-border'>
                    <img className='head-shot' alt='headshot' src={headshot}/>
                    <div className='about-me-text'>
                        <p className='description'>
                        My name is Peter Crosta. I am a full stack software engineer with past lives in political campaign management and neurology research. I recently graduated from and then completed a teaching fellowship with Fullstack Academy, which focuses on the NERDS stack (Node, Express, React/Redux, and database using SQL). I love readable code, learning and leveraging the advantages of a new technology, and sharing my knowledge with my peers. When I’m not coding you will find me taking flying trapeze lessons, cooking for friends, or reading on the couch with my dog, 
                        <span> </span>
                        <span className='harry-text' onMouseEnter={this.handleHover} onMouseLeave={this.handleOff}>Harry</span>.
                        </p>
                        <p className='description'>
                        I am currently open to job opportunities, contract, and freelance work. If  you think I would be a good fit, don’t hesitate to reach out!
                        </p>
                    </div>
                </div>
                <h3 className='title' >Skills</h3>
                <SkillList/>
            </div>
        )
    }
}

export default AboutMe