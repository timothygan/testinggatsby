import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/sg.jpg';

class SmallGroup extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Small Group'} image={img}/>
        <EventDescription
          tagline={'A group that is small in size but big in heart.'}
          emphasis={'heart.'}
          description={'Small group is a place where you can study the Bible and live life alongside a tight-knit community of believers. We want to create an open, comfortable space where you can learn about God, grow closer to one another, and share in your joys and sorrows. Feel free to fill out the small group interest form at the bottom of this page to get connected!'}>
        </EventDescription>
        <Footer/>
      </Fragment>
    )
  }
}

export default SmallGroup;
