import React, { Component, Fragment } from 'react';
import { graphql } from "gatsby"

import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact-us.css';

import PrayerCard from '../components/prayer-card';

/*class PrayerWall extends Component{

    render(){
      const r1 = this.props.data.allGoogleSheetSheet1Row.edges[0].node.prayerRequest;
      const r2 = this.props.data.allGoogleSheetSheet1Row.edges[1].node.prayerRequest;
      const r3 = this.props.data.allGoogleSheetSheet1Row.edges[2].node.prayerRequest;
      const r4 = this.props.data.allGoogleSheetSheet1Row.edges[3].node.prayerRequest;
      const r5 = this.props.data.allGoogleSheetSheet1Row.edges[4].node.prayerRequest;
        return(
            <Fragment>
                <Header/>
                <div className={'standalone-title'} id={'calendar-title'}>
                    <h1>Prayer Wall</h1>
                </div>
                <PrayerCard request={r1} prayerCount={0}></PrayerCard>
                <PrayerCard request={r2} prayerCount={0}></PrayerCard>
                <PrayerCard request={r3} prayerCount={0}></PrayerCard>
                <PrayerCard request={r4} prayerCount={0}></PrayerCard>
                <PrayerCard request={r5} prayerCount={0}></PrayerCard>
                <Footer/>
            </Fragment>
        )
    }
}

export const pageQuery = graphql`
  query {
    allGoogleSheetPrayerRequestsRow {
      edges {
        node {
          prayerRequest
        }
      }
    }
  }`

export default PrayerWall;*/
