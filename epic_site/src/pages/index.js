import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeSection1 from "../components/home-section-1";
import HomeSection2 from "../components/home-section-2";
import HomeSection3 from "../components/home-section-3";
import HomeSection4 from "../components/home-section-4";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <HomeSection1/>
                <HomeSection2/>
                <HomeSection3/>
                <HomeSection4/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;

