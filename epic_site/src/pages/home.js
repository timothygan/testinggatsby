import React, { Component, Fragment } from 'react';
import HomeSectionOne from '../components/home-section-one';
import HomeSectionTwo from '../components/home-section-two';
import HomeSectionThree from '../components/home-section-three';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
          <HomeSectionOne/>
          <HomeSectionTwo/>
          <HomeSectionThree/>
      </Fragment>
    )
  }
}

export default Home;
