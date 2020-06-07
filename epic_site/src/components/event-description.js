import React, { Component, Fragment } from "react"
import "./../styles/event.css"

class EventDescription extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let start = this.props.tagline.indexOf(this.props.emphasis);
    let end = start + this.props.emphasis.length;
    let tagline_start = this.props.tagline.substring(0, start);
    let tagline_end = this.props.tagline.substring(end);

    return(
      <Fragment>
        <div className="event-description">
          <div id={'tagline'}>
            {tagline_start}
            <span id='emphasis'>{this.props.emphasis}</span>
            {tagline_end}
          </div>
          <div id={'description'}>
            {this.props.description}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EventDescription;
