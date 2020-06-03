import React, { Component, Fragment } from "react"
import AnimatedButton from "./animated-button";
import "./../styles/subject-card.css"




class SubjectCard extends Component{
    constructor(props){
        super(props);
    }


    render(){
    
        return(
            <Fragment>
                <div className="card">
				<div className="hoverText">
					{this.props.description}
				</div>
                <div className="graphic">
					{this.props.graphic}
    			</div>

                        <AnimatedButton className="AnimatedButton"
                                        hoverBackground='rgba(255,255,255,1)'
                                        hoverTextColor='rgba(255, 120, 100)'
                                        width='50%'
                                        height="50%">
                                            {this.props.buttonText} 
                        </AnimatedButton>
                    </div>
                    
            </Fragment>
                
        );
    }
}
export default SubjectCard;
