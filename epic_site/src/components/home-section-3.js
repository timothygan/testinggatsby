import React, { Component, Fragment } from "react"
import './../styles/home.css'
import img1 from '../images/christmas-potluck.jpeg'
import img2 from '../images/christmas-potluck.jpeg'
import AnimatedButton from "./animated-button";


class HomeSection3 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Section-Three">
                    <div className="box">
                      <img src={img1}></img>
                      <div className="label">
                        <h4>Small Group</h4>
                      </div>
                      <div className="text-box">
                        <h3>It's never too late to join a small group!</h3>
                      </div>
                      <AnimatedButton
                        className="AnimatedButton"
                        background='rgba(0, 0, 0, .2)'
                        hoverBackground='rgba(83, 108, 136, .7)'
                        hoverTextColor='white'
                        width='25%'>
                        Learn More
                      </AnimatedButton>
                    </div>
                    <div className="box">
                      <img src={img2}></img>
                      <div className="label">
                        <h4>Large Group</h4>
                      </div>
                      <div className="text-box">
                        <h3>Come meet people at large group!</h3>
                      </div>
                      <AnimatedButton
                        className="AnimatedButton"
                        background='rgba(0, 0, 0, .2)'
                        hoverBackground='rgba(83, 108, 136, .7)'
                        hoverTextColor='white'
                        width='25%'>
                        Learn More
                      </AnimatedButton>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeSection3;
