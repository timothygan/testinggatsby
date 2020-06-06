import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
//import EventDescription from "../components/event-description";
import img from '../images/sg.jpg';

class SmallGroup extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Small Groups'} image={img}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default SmallGroup;
