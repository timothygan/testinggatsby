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
   /*const content = "<div>" + this.props.data.allWordpressPage.edges[0].node.content + "</div>";

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/xml');*/

    const row = this.props.data.allGoogleSheetEventPagesRow.edges[0].node;
    const title = row.title;
    const tagline = row.tagline;
    const description = row.description;
    const emphasis = row.emphasis;
    const date = row.date;
    const time = row.time;
    const location = row.location;
    const url = row.googlemapsurl;

    return(
      <Fragment>
        <Header/>
        <EventHeader title={title} image={img}/>
        <EventDescription
          tagline={tagline}
          emphasis={emphasis}
          description={description}
        >
        </EventDescription>
        <EventMap
          map_src={url}
          date={date}
          time={time}
          location={location}>
        </EventMap>
        <Footer/>
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    allGoogleSheetEventPagesRow(filter: {title: {eq: "Go Team"}}) {
      edges {
        node {
          description
          emphasis
          googlemapsurl
          title
          tagline
          date
          time
          location
        }
      }
    }
  }`

export default GoTeam;
