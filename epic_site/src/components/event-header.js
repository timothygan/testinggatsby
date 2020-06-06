import React, { Component, Fragment } from "react"
import "./../styles/event.css"

class EventHeader extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <div className="event-header">
          <img src={this.props.image} alt="event image"></img>
          <div className={'event-title'}>
            <div className={'panel'}></div>
            <div className={'panel'} id={'front-panel'}>
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EventHeader;
