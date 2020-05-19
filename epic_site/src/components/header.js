import React, { Component, Fragment } from "react"
import { Link } from 'gatsby'
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
                    <Link to={'/'}><img src = {logo} alt="epic movement logo"></img></Link>
                    <Link to={'/'} className={"Header-Title-Link"}>
                        <div className="Header-Title">
                            UT EPIC MOVEMENT
                        </div>
                    </Link>

                    <button type="button" className="Menu-Button">
                        i am a useless button
                    </button>

                </header>

            </Fragment>
        );
    }
}
export default Header;
