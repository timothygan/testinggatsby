import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import img from '../images/contact-us.jpg';

class ContactUs extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Contact Us'} image={img}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ContactUs;
