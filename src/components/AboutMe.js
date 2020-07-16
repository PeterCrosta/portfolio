import React from 'react'
import SkillList from './SkillList'

function AboutMe() {
    return (
        <div id='about-me' className='container'>
            <h1>About Me</h1>
            <div id='about-me-container' className='double-border'>
                <img className='head-shot' alt='headshot' src='https://media-exp1.licdn.com/dms/image/C4D03AQG_1qsTnDvwYw/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=4DsAsw63M05gdShk-_AgTRDSr_aHNkh5h4_R2hoMvlU'/>
                <div className='about-me-text'>
                    <p className='description'>
                    My name is Peter Crosta. I am a fullstack software engineer and former political campaign manager and neurology researcher. I discovered my passion for software development after teaching myself SQL for a neurology research study. In that role, I quickly learned to love the task of writing a query from the initial whiteboarding of what columns on what tables need to be joined and with what conditionals, all the way down to meticulously writing the code in a text editor before pasting it in the terminal.
                    </p>
                    <p className='description'>
                    That passion for coding led me to enroll in Fullstack Academy, where the formal curriculum is built around the NERDS stack (Node, Express, React/Redux, and database using SQL), but its real value was teaching me self-reliance as a coder, how to code with others, and that any technology is within my grasp.
                    </p>
                </div>
            </div>
            <h3 className='title' >Skills</h3>
            <SkillList/>
        </div>
    )
}

export default AboutMe