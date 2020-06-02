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
      if(!this.state.toggled) {
        this.showSideNav();
      } else {
        this.hideSideNav();
      }
    }

    showSideNav() {
      document.getElementById("sidenav").style.width = "20%";
    }

    hideSideNav() {
      document.getElementById("sidenav").style.width = "0%";
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
                <header className={ this.state.scrolled ? "scrolled" : "Banner" }
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
                    <div id="sidenav" >
                      <a href="#">About</a>
                      <a href="#">Calendar</a>
                      <a href="#">Large Group</a>
                      <a href="#">Small Group</a>
                      <a href="#">Church Rides</a>
                      <a href="#">Go Team</a>
                      <a href="#">Summer Missions</a>
                      <a href="#">Blog</a>
                      <a href="#">Exploring Faith</a>
                      <a href="#">Contact Us</a>
                      <a href="#">Merch Shop</a>
                    </div>
                </header>

            </Fragment>
        );
    }
}
export default Header;
