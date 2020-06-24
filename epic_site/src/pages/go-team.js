import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/go-team.jpeg';
import EventMap from "../components/event-map";
import {graphql} from "gatsby";

class GoTeam extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const content = "<div>" + this.props.data.allWordpressPage.edges[0].node.content + "</div>";

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/xml');

    const list = doc.getElementsByTagName('p');
    const tagline = list[0].innerHTML.replace(new RegExp('<strong>|<\\/strong>', 'g'), '');
    const description = list[1].innerHTML;
    const emphasis = doc.getElementsByTagName('strong')[0].innerHTML;

    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Go Team'} image={img}/>
        <EventDescription
          tagline={tagline}
          emphasis={emphasis}
          description={description}
        >
        </EventDescription>
        <EventMap
          map_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.322788813127!2d-97.73841438467045!3d30.284871114129114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b81da169f%3A0x74d4292e5f6afe63!2sWilliam%20C.%20Powers%20Student%20Activity%20Center!5e0!3m2!1sen!2sus!4v1592016006860!5m2!1sen!2sus'}
          date={'Every Friday'}
          time={'3:00 - 5:00pm'}
          location={'WCP 3.112B'}>
        </EventMap>
        <Footer/>
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {title: {eq: "Go Team"}}) {
      edges {
        node {
          content
        }
      }
      }
  }`

export default GoTeam;
