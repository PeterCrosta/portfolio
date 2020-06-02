import React from 'react'

function AboutMe() {
    return (
        <div id='about-me' className='container'>
            <h1>About Me</h1>
            <img alt='headshot' src='https://media-exp1.licdn.com/dms/image/C4D03AQG_1qsTnDvwYw/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=4DsAsw63M05gdShk-_AgTRDSr_aHNkh5h4_R2hoMvlU'/>
            <p className='description'>
                I am a full stack javascript developer with a focus in NERDS (Node, Express, React/Redux, and database using SQL). I also have experience creating data visualizations using d3 in React, and a web scraper using Python, Django, SQLite, Beautiful Soup, and Requests.
            </p>
            <p className='description'>
                I discovered my passion for software development after teaching myself SQL for a neurology research study. Language precisely deployed, along with its potential to leverage complex algorithms for easy-to-use consumer products means unlimited potential projects for me to get excited about.
            </p>
        </div>
    )
}

export default AboutMe