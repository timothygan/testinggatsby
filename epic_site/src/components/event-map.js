import React, { Fragment } from "react"
import "./../styles/event.css"
import AnimatedButton from "./animated-button"
import { Link } from "gatsby"

/* props: {map_src, date, time, location}
   map-src: embed code of google map
   date: date of event (or day of week)
   time: time of event
   location: location of event
 */
const EventMap = props => {

  return(
    <Fragment>
      <div className="event-map-container">
        <div className={'map'}>
          <iframe
            src={props.map_src}
            width="500" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false"
            tabIndex="0"></iframe>
        </div>
        <div className={'event-info-container'}>
          <div className={'event-info'}>
            <div>{props.date}</div>
            <div>{props.time}</div>
            <div>{props.location}</div>
          </div>
          <Link to={'/calendar'}>
            <AnimatedButton
              id={'calendar-button'}
              hoverTextColor='rgb(220, 159, 158)'
              hoverBackground='rgba(255,255,255,1)'>
              See Calendar
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default EventMap;
