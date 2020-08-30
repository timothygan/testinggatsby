import React, { Fragment } from "react"
import "./../styles/small-group.css"

/* props: {request, prayer-count}
   request: prayer request string
   prayer-count: # times request has been prayed for
*/
const PrayerCard = props => {
    let timeString = props.prayerCount === 1 ? 'time' : 'times';
    return(
    <Fragment>
    <div className={'prayer-card'}>
        <div className={'prayer-card-content'}>
            <div>{props.request}</div>
            <div>Prayed for {props.prayerCount} {timeString}</div>
        </div>
    </div>
    </Fragment>
    );
}

export default PrayerCard;
