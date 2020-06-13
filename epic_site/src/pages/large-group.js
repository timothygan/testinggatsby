import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/large-group.jpeg';

class LargeGroup extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Large Group'} image={img}/>
        <EventDescription
          tagline={'Gathering together to praise God and uplift each other.'}
          emphasis={'together'}
          description={'Large group is a place where the entire Epic community gathers as one body in weekly fellowship. We have worship, speakers, and fun activities for everyone to participate in. We welcome anyone who is interested to join us and learn what Epic is all about!'}>
        </EventDescription>
        <Footer/>
      </Fragment>
    )
  }
}

export default LargeGroup;
