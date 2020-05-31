import React, { Component, Fragment } from "react"
import { Link } from 'gatsby'
import logo from './../images/bw-epic-logo.png'
import './../styles/header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
          toggled: false,
          scrolled: false
        }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    handleClick = () => {
      this.setState({
        toggled: !this.state.toggled
      });
    }

    handleScroll = () => {
      if(window.scrollY > document.getElementById('Banner').clientHeight) {
        this.setState({
          scrolled: true
        });
      } else {
        this.setState({
          scrolled: false
        });
      }
    }

    render(){

        return(
            <Fragment>
                <header onScroll={ this.handleScroll }
                          className={ this.state.scrolled ? "scrolled" : "Banner" }
                          id="Banner">
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
