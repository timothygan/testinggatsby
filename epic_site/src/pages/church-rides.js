import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/go-team.jpeg';
import {graphql} from "gatsby";

class ChurchRides extends Component{

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
        <EventHeader title={'Church Rides'} image={img}/>
        <EventDescription
          tagline={tagline}
          emphasis={emphasis}
          description={description}
        >
        </EventDescription>
        <Footer/>
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {title: {eq: "Church Rides"}}) {
      edges {
        node {
          content
        }
      }
    }
  }`

export default ChurchRides;
