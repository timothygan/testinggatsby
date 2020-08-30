import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/calendar.css';

class Calendar extends Component{

  render(){
    return(
      <Fragment>
        <Helmet>
          <script async={true} defer={true} crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0"
                  nonce="vmb7BmlZ"></script>
        </Helmet>
        <Header/>
        <div className={'standalone-title'} id={'calendar-title'}>
          <h1>Calendar</h1>
        </div>
        <div id={'calendar-body'}>
          <iframe src="https://calendar.google.com/calendar/embed?src=texasepic@gmail.com&ctz=America/Chicago"
                  width="800" height="600" frameBorder="0" scrolling="no" title="Texas Epic Calendar"></iframe>
          <div className="fb-page" href="https://www.facebook.com/TexasEpic/" tabs="events"
               width="700" height="1000" small-header="true" adapt-container-width="true"
               hide-cover="true" show-facepile="true"></div>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Calendar;
