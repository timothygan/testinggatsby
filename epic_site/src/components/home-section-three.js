import React, { Component, Fragment } from "react"
import './../styles/home.css'


//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class HomeSectionThree extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Section-Three">
                    join my sg
                </div>
                
            </Fragment>
        );
    }
}
export default HomeSectionThree;
