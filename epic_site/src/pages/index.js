import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from './home';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <HashRouter>
                <Header/>
                    <div id='main'>
                        <Switch>
                            <Route exact path ='/'>
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                <Footer/>
            </HashRouter>
        )
    }
}

export default App;

