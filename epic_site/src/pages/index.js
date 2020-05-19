import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeSectionOne from "../components/home-section-one";
import HomeSectionTwo from "../components/home-section-two";
import HomeSectionThree from "../components/home-section-three";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <HomeSectionOne/>
                <HomeSectionTwo/>
                <HomeSectionThree/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;

