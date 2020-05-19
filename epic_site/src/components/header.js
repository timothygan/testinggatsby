import React, { Component, Fragment } from "react"
import logo from './../images/logo.png'
import './../styles/header.css'

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <header className="Banner">
                    <img src = {logo} width="142" height="72" alt="epic movement logo"></img>
                    <div className="Header-Title">
                        EPIC MOVEMENT
                    </div>

                    <button type="button" className="Menu-Button">
                        i am a useless button
                    </button>

                </header>
                
            </Fragment>
        );
    }
}
export default Header;
