import React, { Fragment } from "react"
import "./../styles/small-group.css"

/* props: {img, name, time, location}
   img: src of sg leader picture
   name: name of sg leader
   time: meeting time
   location: meeting location
*/
const SmallGroupCard = props => {
  return(
    <Fragment>
      <div className={'sg-card-container'}>
        <div className={'sg-card'}>
          <div className={'sg-card-content'}>
            <div><b>{props.name}</b></div>
            <div>Meeting Time: {props.time}</div>
            <div>Location: {props.location}</div>
          </div>
        </div>
        <span className={'sg-leader-img-wrapper'}>
          <img className={'sg-leader-img'} src={props.img} alt={"picture of " + props.name}></img>
        </span>
      </div>
    </Fragment>
  );
}

export default SmallGroupCard;
