import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/go-team.jpg';

class GoTeam extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Go Team'} image={img}/>
        <EventDescription
          tagline={'Reaching the campus for Jesus.'}
          emphasis={'Jesus.'}
          description={'Every Friday, members of Epic gather at Go Team to learn about outreaching to our fellow students on campus. Then, we go out and start conversations with people to learn more about their lives and stories. Join us to reach our campus with faith and love!'}>
        </EventDescription>
        <Footer/>
      </Fragment>
    )
  }
}

export default GoTeam;
