import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {AboutMe, ContactMe, Education, Projects, Experience} from './components'

function Routes() {
    return (
        <div id='routes' >
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route exact path='/portfolio' component={AboutMe} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/education' component={Education} />
                <Route path='/experience' component={Experience} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact-me' component={ContactMe} />
            </Switch>
        </div>

    )
}

export default Routes