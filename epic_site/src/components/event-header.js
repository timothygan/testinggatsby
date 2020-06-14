import React, { Fragment } from "react"
import "./../styles/event.css"

/* props: {title, image}
   title: page title
   image: header image
 */
const EventHeader = props => {
    return(
      <Fragment>
        <div className="event-header">
          <img src={props.image} alt={props.title}></img>
          <div className={'event-title-panel'}>
            <h1>{props.title}</h1>
          </div>
        </div>
      </Fragment>
    );
  }

export default EventHeader;
