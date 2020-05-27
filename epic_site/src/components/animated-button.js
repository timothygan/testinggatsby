import React from "react"
import styled from 'styled-components'

// Generic button component with colorchange animation
const AnimatedButton = styled.button`
    ${props => props.width ? 'width :' +  props.width : ''};
    ${props => props.height ? 'height :' +  props.height : ''};
    border-width : 2px;
    border-color : ${props => props.borderColor ? props.borderColor : 'white'};
    color : ${props => props.textColor ? props.textColor : 'white'};
    align : center;
    padding : ${props => props.padding ? props.padding : '10px 30px 10px 30px'};
    background-color : ${props => props.background ? props.background : 'transparent'};;
    -webkit-transition : all 0.4s;
    -moz-transition : all 0.4s;
    transition : all 0.4s;
    font-family : "Libre Franklin";
    overflow : hidden;
    border-style: solid;
    display : inline-block;
    z-index: 1;
    cursor: pointer;

    &:hover{
        color: ${props => props.hoverTextColor ? props.hoverTextColor : 'black'};
        background-color : transparent;
    }

    &:after{
        content: "";
        background-color: ${props => props.hoverBackground ? props.hoverBackground : 'white'};
        border-color : ${props => props.hoverBorderColor ? props.hoverBorderColor : 'white'};
        width: 100%;
        height: 0%;
        top: 0;
        left: 0;
        position: absolute;
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
        z-index: -1;
    }

    &:hover:after{
        height : 100%;
    }

    &:active:after{
        height : 100%;
    }
`;

/*

class AnimatedButton extends Component{
    constructor(props){
        super(props);

        console.log(this.props)

    }




    render(){
        //set these parameters to be strings wherever you use the button, e.g.
        // <AnimatedButton borderColor='#ffffff'
        //                 hoverBorderColor='rgba(255,255,0,1)'
        //                 background='#000000'
        //                 width='40px'
        //                 ...></AnimatedButton>
        //use rgba if you want to set opacity as well

        return(
            <Button borderColor={this.props.borderColor}
                    hoverBorderColor={this.props.hoverBorderColor}
                    textColor={this.props.textColor}
                    hoverTextColor={this.props.hoverTextColor}
                    background={this.props.background}
                    hoverBackground={this.props.hoverBackground}
                    width={this.props.width}
                    padding={this.props.padding}
                    height={this.props.height}>

                    {this.props.text}

            </Button>


        );
    }
}*/
export default AnimatedButton;
