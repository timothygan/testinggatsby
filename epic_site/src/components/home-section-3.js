import React, { Component, Fragment } from "react"
import './../styles/home.css'
import img1 from '../images/christmas-potluck.jpeg'
import img2 from '../images/christmas-potluck.jpeg'

//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

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
                      <div className="text-box">
                        <h3>It's never too late to join a small group!</h3>
                      </div>
                    </div>
                    <div className="box">
                      <img src={img2}></img>
                      <div className="text-box">
                        <h3>It's never too late to join a small group!</h3>
                      </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeSection3;
