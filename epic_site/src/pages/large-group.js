import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/large-group.jpeg';
import EventMap from "../components/event-map";

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
          tagline={'Gathering together to praise God.'}
          emphasis={'together'}
          description={'Large group is a place where the entire Epic community gathers as one body in weekly fellowship. We have worship, speakers, and fun activities for everyone to participate in. We welcome anyone who is interested to join us and learn what Epic is all about!'}>
        </EventDescription>
        <EventMap
          map_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.4355831579383!2d-97.74094948467051!3d30.281659014281978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59e864d3c69%3A0xe21220e37a3e137!2sGeorge%20I.%20S%C3%A1nchez%20Bldg%2C%201912%20Speedway%2C%20Austin%2C%20TX%2078712!5e0!3m2!1sen!2sus!4v1592013868226!5m2!1sen!2sus'}
          date={'Every Wednesday'}
          time={'8:00 - 9:30pm'}
          location={'SZB 104'}>
        </EventMap>
        <Footer/>
      </Fragment>
    )
  }
}

export default LargeGroup;
