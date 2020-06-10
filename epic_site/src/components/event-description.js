import React, { Fragment } from "react"
import "./../styles/event.css"

/* props: {tagline, emphasis, description}
   tagline: large lettered statement
   emphasis: word/phrase that is displayed with emphasis font color
   description: info under tagline
 */
const EventDescription = props => {
    let start = props.tagline.indexOf(props.emphasis);
    let end = start + props.emphasis.length;
    let tagline_start = props.tagline.substring(0, start);
    let tagline_end = props.tagline.substring(end);

    return(
      <Fragment>
        <div className="event-description">
          <div id={'tagline'}>
            {tagline_start}
            <span id='emphasis'>{props.emphasis}</span>
            {tagline_end}
          </div>
          <div id={'description'}>
            {props.description}
          </div>
        </div>
      </Fragment>
    );
}

export default EventDescription;
