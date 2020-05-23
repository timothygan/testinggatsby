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
                    <div className="Box">
                      <img src={img1}></img>
                    </div>
                    <div className="Box">
                      <img src={img2}></img>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeSection3;
