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
                      <a href="/">Home</a>
                      <a href="/about">About</a>
                      <a href="/calendar">Calendar</a>
                      <a href="/large-group">Large Group</a>
                      <a href="/small-group">Small Group</a>
                      <a href="/church-rides">Church Rides</a>
                      <a href="/go-team">Go Team</a>
                      <a href="/prayer-wall">Prayer Wall</a>
                      <a href="/summer-missions">Summer Missions</a>
                      <a href="/blog">Blog</a>
                      <a href="/exploring-faith">Exploring Faith</a>
                      <a href="/contact-us">Contact Us</a>
                      <a href="/merch-shop">Merch Shop</a>
                    </div>
                </header>

            </Fragment>
        );
    }
}
export default Header;
