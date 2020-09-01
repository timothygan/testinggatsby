import React, { Component, Fragment } from 'react';
import { graphql } from "gatsby"

import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import Form from "../components/form";
import '../styles/contact-us.css';

import img from '../images/contact-us.jpg';
import fb from '../images/fb.png';
import insta from '../images/insta.png';

class ContactUs extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Contact Us'} image={img}/>
        <div className={'bottom-section'} id={'contact-bottom-section'}>
          <Form url={'https://docs.google.com/forms/d/e/1FAIpQLScZ2g5a4iP_Ql9EcNC2FetgmKRzJaRSl4RpsWh0SOqut2V0fg/viewform?fbclid=IwAR3FeB7WCUUW5lur--Tc6HsDpq2L747jUrGbz1z2Eq-kbzvSIF6hjOau2ZA'}></Form>
          <div id={'social-container'}>
          <div id={'social-media'}>
            <a href={'https://www.facebook.com/groups/texasepic/'} target={'_blank'} rel="noopener noreferrer">
              <img className={'social-icon'} id={'fb'} src={fb} alt={'facebook icon'}></img>
            </a>
            <a href={'https://www.instagram.com/texasepic/'} target={'_blank'} rel="noopener noreferrer">
              <img className={'social-icon'} id={'insta'} src={insta} alt={'instagram icon'}></img>
            </a>
          </div>
          <div id={'epic-email-container'}>
            <a id={'epic-email'} href={'mailto:texasepic@gmail.com'}>texasepic@gmail.com</a>
          </div>
        </div>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}


export default ContactUs;
