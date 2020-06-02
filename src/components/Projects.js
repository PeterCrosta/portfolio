import React from 'react'

function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <div className='container'>
                <div className='project'>
                    <a href='http://www.delve.nyc/' target='_blank' rel="noopener noreferrer">
                        <h2 className='title'>Delve.NYC</h2>
                        <img alt='placeholder' src='https://via.placeholder.com/350x150'/>
                        <p className='description'>A site for your next apartment hunt: Visualizing NYC quality-of-life data to help you pick a neighborhood before picking an apartment</p>
                    </a>
                    <h3>Technologies used:</h3>
                    <div className='skills'>
                        <ul>Javascript</ul>
                        <ul>React</ul>
                        <ul>D3</ul>
                        <ul>Express</ul>
                        <ul>Mongodb</ul>
                        <ul>NYC Open Data api</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects