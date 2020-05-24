import React, { Component, Fragment } from "react"
import './../styles/home.css'
import img1 from '../images/christmas-potluck.jpeg'
import img2 from '../images/christmas-potluck.jpeg'

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
                        Movements <span className="bold-words">everywhere </span>
                        <br></br>
                        so <span className="bold-words">everyone</span> knows someone
                        <br></br>
                        who truly follows <span className="bold-words">Christ</span>.
                    </div>


                    <div className="who-we-are">
                        We're a  <span className="bold-words">caring </span> community
                        <br></br>
                        of Asian Americans
                        <br></br>
                        <span className="bold-words">passionate</span> about <span className="bold-words">Jesus</span>!
                    </div>

                    <div className="section-two-img-one">
                        <img src={img1}></img>
                    </div>

                    <div className="section-two-img-two">
                        <img src={img1}></img>
                    </div>
                </div>

            </Fragment>
        );
    }
}
export default HomeSection2;
