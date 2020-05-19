import React, { Component, Fragment } from "react"
import "./../styles/image-carousel.css"


//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class ImageCarousel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Carousel">

                </div>
                
            </Fragment>
        );
    }
}
export default ImageCarousel;
