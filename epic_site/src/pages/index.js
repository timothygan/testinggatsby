import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from './home';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <Home/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;

