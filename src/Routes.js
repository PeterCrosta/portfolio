import React from 'react'
import {withRouter} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import {AboutMe, ContactMe, Education, Projects, Experience} from './components'

function Routes() {
    return (
        <div id='routes' >
            <Switch>
                <Route exact path='/' component={withRouter(AboutMe)} />
                <Route exact path='/portfolio' component={withRouter(AboutMe)} />
                <Route path='/about-me' component={withRouter(AboutMe)} />
                <Route path='/education' component={withRouter(Education)} />
                <Route path='/experience' component={withRouter(Experience)} />
                <Route path='/projects' component={withRouter(Projects)} />
                <Route path='/contact-me' component={withRouter(ContactMe)} />
            </Switch>
        </div>

    )
}

export default Routes