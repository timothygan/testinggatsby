import React, { Fragment } from "react"
import "./../styles/small-group.css"
import SmallGroupCard from "./small-group-card";

/* props: {type, title, pictures, names, times, locations}
   type: pink-panel or blue-panel
   title: panel title
   pictures: list of sg leader picture srcs
   names: list of sg leader names
   times: list of sg meeting times
   locations: list of sg meeting locations
   # = sg number, from 1-3
*/
const SmallGroupPanel = props => {
  //let titleClass = props.type + "-title";
  return(
    <Fragment>
      <div className={'container'}>
        <div className={'sg-title-panel'}>
          <div className={props.type + '-title'}>
            {props.title}
          </div>
          <div className={props.type + '-title'} id={'sg-title-back-panel'}></div>
        </div>
        <div className={props.type}>
          <SmallGroupCard
            img={props.pictures[0]}
            name={props.names[0]}
            time={props.times[0]}
            location={props.locations[0]}
            color={props.type.substring(0, 4)}>
          </SmallGroupCard>
          <SmallGroupCard
            img={props.pictures[1]}
            name={props.names[1]}
            time={props.times[1]}
            location={props.locations[1]}
            color={props.type.substring(0, 4)}>
          </SmallGroupCard>
          <SmallGroupCard
            img={props.pictures[2]}
            name={props.names[2]}
            time={props.times[2]}
            location={props.locations[2]}
            color={props.type.substring(0, 4)}>
          </SmallGroupCard>
        </div>
      </div>
    </Fragment>
  );
}

export default SmallGroupPanel;
