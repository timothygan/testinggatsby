import React, { Component, Fragment } from "react"
import './../styles/home.css'
import img1 from '../images/christmas-potluck.jpeg'
import img2 from '../images/christmas-potluck.jpeg'
import SubjectCard from "./subject-card";


class HomeSection4 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Section-Four">
                    <SubjectCard buttonText="Church Rides"></SubjectCard>
                    <SubjectCard buttonText="Explore Faith"></SubjectCard>
                    <SubjectCard buttonText="Calendar"></SubjectCard>
                </div>
            </Fragment>
        );
    }
}
export default HomeSection4;
