import React, { Component, Fragment } from "react"
import './../styles/home.css'
import img1 from '../images/winter-conf.jpeg'
import img2 from '../images/fall-retreat.jpeg'

//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class HomeSection2 extends Component{
    constructor(props){
        super(props);
    }






    render(){
        return(
            <Fragment>
                <div className="Section-Two">

                    <div className="vertical-line">
                    </div>


                    <div className="mission-statement">
                        <div data-sal="slide-right"
                        data-sal-delay="300"
                        data-sal-easing="easeOutQuart"
                        style={{"--sal-duration": ".7s"}}>
                            Movements <span className="bold-words">everywhere </span>
                            <br></br>
                            so <span className="bold-words">everyone</span> knows someone
                            <br></br>
                            who truly follows <span className="bold-words">Christ</span>.
                        </div>
                    </div>


                    <div className="who-we-are">
                        <div data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-easing="easeOutQuart"
                        style={{"--sal-duration": ".7s"}}>
                            We're a  <span className="bold-words">caring </span> community
                            <br></br>
                            of Asian Americans
                            <br></br>
                            <span className="bold-words">passionate</span> about <span className="bold-words">Jesus</span>!
                        </div>
                    </div>


                    <div className="section-two-img-one">
                        <div data-sal="zoom-in"

                        data-sal-easing="easeOutQuart"
                        style={{"--sal-duration": ".6s"}}>
                            <img className="section-two-img" src={img1} alt="event"></img>
                        </div>
                    </div>

                    <div className="section-two-img-two">
                        <div data-sal="zoom-out"

                        data-sal-easing="easeOutQuart"
                        style={{"--sal-duration": ".6s"}}>
                            <img className="section-two-img" src={img2} alt="event"></img>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}
export default HomeSection2;
