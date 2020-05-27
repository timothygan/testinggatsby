import React, { Component, Fragment } from "react"
import "./../styles/home.css"
import img from '../images/michelle-baptism.jpeg'
import AnimatedButton from "./animated-button";

//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class HomeSection1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Section-One">
                  <img src={img} alt="upcoming event"></img>
                  <AnimatedButton
                    className="AnimatedButton"
                    background='rgba(0, 0, 0, .5)'
                    hoverBackground='rgba(255, 134, 110, .7)'
                    hoverTextColor='white'
                    width='15%'>
                    Learn More
                  </AnimatedButton>
                </div>
            </Fragment>
        );
    }
}
export default HomeSection1;
