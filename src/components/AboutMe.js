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
                    My name is Peter Crosta. I am a fullstack software engineer with past lives in political campaign management and neurology research. I recently graduated from and then completed a teaching fellowship with Fullstack Academy, which focuses on the NERDS stack (Node, Express, React/Redux, and database using SQL). I love readable code, learning and leveraging the advantages of a new technology, and sharing my knowledge with my peers. When I’m not coding you will find me taking flying trapeze lessons, cooking for friends, or reading on the couch with my dog.
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

export default AboutMe