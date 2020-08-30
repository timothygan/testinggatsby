import React, { Component, Fragment } from 'react';
import { graphql } from "gatsby"

import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact-us.css';

import PrayerCard from '../components/prayer-card';

class PrayerWall extends Component{

    render(){
        
        return(
            <Fragment>
                <Header/>
                <div className={'standalone-title'} id={'calendar-title'}>
                    <h1>Prayer Wall</h1>
                </div>
                <PrayerCard request={'hi'} prayerCount={0}></PrayerCard>
                <Footer/>
            </Fragment>
        )
    }
}

export const pageQuery = graphql`
  query {
    allGoogleSpreadsheetSheet1 {
        edges {
          node {
            col1
            col2
          }
        }
      }
  }`

export default PrayerWall;
