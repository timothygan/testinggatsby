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
          <img src={props.image} alt="event image"></img>
          <div className={'event-title'}>
            <div className={'panel'}></div>
            <div className={'panel'} id={'front-panel'}>
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

export default EventHeader;
