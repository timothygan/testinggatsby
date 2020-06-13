import React, { Component, Fragment } from "react";
import "../styles/footer.css";
import img from "../images/contact-us.jpg";
import fb from "../images/fb.png";
import insta from "../images/insta.png";


class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div id={'footer-container'}>
                  <div className={'horizontal-line'}></div>
                  <a href={'https://www.facebook.com/groups/texasepic/'} target={'_blank'}>
                    <img className={'social-icon'} id={'fb'} src={fb}></img>
                  </a>
                  <a href={'https://www.instagram.com/texasepic/'} target={'_blank'}>
                    <img className={'social-icon'} id={'insta'} src={insta}></img>
                  </a>
                  <div className={'horizontal-line'}></div>
                </div>

            </Fragment>
        );
    }
}
export default Footer;
