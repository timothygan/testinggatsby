import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './home';
import NotFoundPage from './404'
import Testing from './testing.js'

export default class App extends Component {
    render() {
        return(
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/testing" component={Testing} />
                        <Route path="*" component={NotFoundPage} />   
                    </Switch>
                </Router>
            </ Fragment>
        )
    }
}
