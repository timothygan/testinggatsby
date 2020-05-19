import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import HomeSectionOne from '../components/home-section-one';
import HomeSectionTwo from '../components/home-section-two';
import HomeSectionThree from '../components/home-section-three';
import Footer from '../components/footer';


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <HashRouter>
                    <Header/>
                        <Switch>
                            <Route exact path ='/'>
                                <HomeSectionOne/>
                                <HomeSectionTwo/>
                                <HomeSectionThree/>
                            </Route>
                        </Switch>
                    <Footer/>
                </HashRouter>
            </Fragment>
        )
    }
}

export default Home;

