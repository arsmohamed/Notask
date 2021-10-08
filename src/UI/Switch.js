import React, { useState }  from 'react';
import styled from 'styled-components';
import {MdBrightness4, MdBrightness2,MdBrightness3 } from "react-icons/md";
import FadeIn  from 'react-fade-in';

const IconStyle = styled(FadeIn)`
    color: ${(props) => (props.FontColorInput ? props.FontColorInput : "")};
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    font-size: ${(props) => (props.FontSizeInput ? props.FontSizeInput : "")};
`
const SwitchIcion = (props) => {
    const [isClicked, isClickedChanged] = useState(1);
    const changeState = () => {
        props.OnChangedColor(changedBackGround())
        if(isClicked === 1){isClickedChanged(2)} 
        else if (isClicked === 2){isClickedChanged(3)}
        else if (isClicked === 3){isClickedChanged(1)}
    }
    const changedBackGround = () => {
        const toReturn = {}
        if(isClicked === 1)
        {
            //toggle Button color
            toReturn.ToggleButton = "#282828";  
            //calendar text color
            toReturn.CalendarTC = "#fff";  
            //Nav Icon Color
            toReturn.NavIconColor = "#999999";
            //Login/Signup color
            toReturn.LogSignColor = "#999999";
            //BodyColor
            toReturn.BodyColor = "#999999";
            //borderColor
            toReturn.BorderColor = "#999999";
            //IcionColor
            toReturn.IconC = "#f5ba13";
            //UserIconColor
            toReturn.UserIconColor = "#999999";
            toReturn.UserIconTextColor = "#282828";
            //ModelArea
            toReturn.NotekBGC = "#fff";
            toReturn.NoteFC = "#000000";
            //userInput
            toReturn.UserInputBGC = "#fff";
            toReturn.UserInputFC = "#000000";
            toReturn.UserInputPHC = "";
            //TextArea
            toReturn.TextAreaBGC = "#fff";
            toReturn.TextAreaFC = "#000000";
            toReturn.TextAreaPHC = "";
            //Calendar
            toReturn.TextFC = "#fff";
        }
        //this is the meddle mode
        else if(isClicked === 2) 
        {
            //toggle Button color
            toReturn.ToggleButton = "#fff"; 
            //calendar text color
            toReturn.CalendarTC = "#fff";
            //Nav Icon Color
            toReturn.NavIconColor = "#282828";
            //Login/Signup color  F0F0F0
            toReturn.LogSignColor = "#282828";
            //BodyColor
            toReturn.BodyColor = "#282828";
            //borderColor
            toReturn.BorderColor = "#FFD700";
            //IcionColor
            toReturn.IconC = "#f5ba13";
            //UserIconColor
            toReturn.UserIconColor = "#282828";
            toReturn.UserIconTextColor = "#F0F0F0";
            //ModelArea
            toReturn.NotekBGC = "#999999";
            toReturn.NoteFC = "#F8F8F8";
            //userInput
            toReturn.UserInputBGC = "#999999";
            toReturn.UserInputFC = "#F8F8F8";
            toReturn.UserInputPHC = "#E0E0E0";
            //TextArea
            toReturn.TextAreaBGC = "#999999";
            toReturn.TextAreaFC = "#F8F8F8";
            toReturn.TextAreaPHC = "#E0E0E0";
            //Calendar
            toReturn.TextFC = "#fff";
        } 
        // this is in the drakest mode
        else if (isClicked === 3)
        {
            //toggle Button color
            toReturn.ToggleButton = "#999999"; 
            //calendar text color
            toReturn.CalendarTC = "#6495ed";
            //Nav Icon Color
            toReturn.NavIconColor = "#fff";
            //Login/Signup color
            toReturn.LogSignColor = "#999999";
            //BodyColor
            toReturn.BodyColor = "#f2f2f2";
            //borderColor
            toReturn.BorderColor = "#f5ba13";
            //IcionColor
            toReturn.IconC = "#f5ba13";
            //UserIconColor
            toReturn.UserIconColor = "#fff";
            toReturn.UserIconTextColor = "#999999";
            //ModelArea
            toReturn.NotekBGC = "#282828";
            toReturn.NoteFC = "#F0F0F0";
            //userInput
            toReturn.UserInputBGC = "#282828";
            toReturn.UserInputFC = "#F0F0F0";
            toReturn.UserInputPHC = "#C8C8C8";
            //TextArea
            toReturn.TextAreaBGC = "#282828";
            toReturn.TextAreaFC = "#C8C8C8";
            //Calendar
            toReturn.TextFC = "#282828";
        }
        return toReturn
    }
    return(
        <IconStyle 
            FontColorInput = {isClicked === 1 ?  "#999999": (isClicked === 2 ? "#282828" : "#fff" ) }
        >
            {isClicked === 1 ?  
            <MdBrightness3 style={{fontSize:"30px", marginTop:"35%"}} onClick={changeState}/> : 
                (isClicked === 2 ? 
                    <MdBrightness2 style={{fontSize:"30px",marginTop:"35%"}} onClick={changeState}/> : 
                    <MdBrightness4 style={{fontSize:"30px",marginTop:"35%"}} onClick={changeState}/> ) }
        </IconStyle>
    )
};

export default SwitchIcion;