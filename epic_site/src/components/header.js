import React, { Component, Fragment } from "react"
import { withRouter } from 'react-router-dom';
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
                    <img src = {logo} alt="epic movement logo" onClick={() => this.props.history.push('/')}></img>
                    <div className="Header-Title" onClick={() => this.props.history.push('/')}>
                        UT EPIC MOVEMENT
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
