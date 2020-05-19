import React, { Component, Fragment } from "react"
import ImageCarousel from "./image-carousel";
import "./../styles/home.css"


//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class HomeSectionOne extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Carousel-Container">
                    <ImageCarousel>
                        
                    </ImageCarousel>
                </div>
                
            </Fragment>
        );
    }
}
export default HomeSectionOne;
