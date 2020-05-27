import React, { Component, Fragment } from "react"
import { Link } from 'gatsby'
import logo from './../images/logo.png'
import './../styles/header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
          toggled: false
        }
    }

    handleClick = () => {
      this.setState({
        toggled: !this.state.toggled
      });
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

                    <div onClick={ this.handleClick }
                            className= { this.state.toggled ? "Toggled-Button" : "Menu-Button" }>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                </header>

            </Fragment>
        );
    }
}
export default Header;
