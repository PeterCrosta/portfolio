import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {AboutMe, ContactMe, EducationExperience, Projects} from './components'

function Routes() {
    return (
        <div id='routes' >
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/education-experience' component={EducationExperience} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact-me' component={ContactMe} />
            </Switch>
        </div>

    )
}

export default Routes