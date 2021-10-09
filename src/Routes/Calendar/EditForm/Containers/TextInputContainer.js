import React, { useState } from "react";
import styled from "styled-components";
import UserInput from '../../../../UI/UserInput'
import TextArea from '../../../../UI/TextArea';
import FadeIn  from 'react-fade-in';
import { LinkOutlined} from "@ant-design/icons";
import { MdDescription, MdTitle  } from "react-icons/md"; 


const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const TitleContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    } 
    const [RecievedTitle, ChangeRecievedTitle] = useState(props.isEditTitle)
    const [isChangedValueTitle, changedValueTitle]= useState(false)
    isChangedValueTitle ? props.SubmitTitle(RecievedTitle) : props.SubmitTitle(props.isEditTitle)

    const TitleHandler = (event) => {
        changedValueTitle(true)
        ChangeRecievedTitle(event.target.value)
    }
    const title = <InfoContainer>
        <FadeIn><MdTitle style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`title` + 1}
        InputValue = {RecievedTitle}
        // This is to change the Value of Title based on the input coming from schedule
        onchangeValue={TitleHandler} 
        name="title"
        inputType={"text"} 
        widthValue={"425px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.ScheduleColor.UserInputBGC}
        FontColorValue={props.ScheduleColor.UserInputFC}
        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
        borderColorValue={props.ScheduleColor.BorderColor}  
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>

    return(title)
}

const DescriptionContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }
    const [RecievedDescription, ChangeRecievedDescription] = useState(props.isEditDescription)
    const [isChangedValueDescription, changedValueDescription]= useState(false)
    isChangedValueDescription ? props.SubmitDescription(RecievedDescription) : props.SubmitDescription(props.isEditDescription)
    const DescriptionHandler = (event) => {
        changedValueDescription(true)
        ChangeRecievedDescription(event.target.value)
    }
    const Description = <InfoContainer>
        <FadeIn><MdDescription style={IconColor}/></FadeIn>
        <FadeIn><TextArea
        key={`Description`+1} 
        InputValue = {RecievedDescription}
        // This is to change the Value of Title based on the input 
        onchangeValue={DescriptionHandler} 
        rows={3}
        name="Description"
        inputType={"text"} 
        widthValue={"425px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.ScheduleColor.UserInputBGC}
        FontColorValue={props.ScheduleColor.UserInputFC}
        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
        borderColorValue={props.ScheduleColor.BorderColor}  
        BorderValue={"solid"}
        resizeValue={"vertical"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>


    return (Description)
}

const URLContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }
    const [RecievedURL, ChangeRecievedURL] = useState(props.isEditURL)
    const [isChangedValueURL, changedValueURL]= useState(false)
    isChangedValueURL ? props.URLOption(RecievedURL) : props.URLOption(props.isEditURL)
    const URLHandler = (event) => {
        changedValueURL(true)
        ChangeRecievedURL(event.target.value)
    }
    const URL = <InfoContainer>
        <FadeIn><LinkOutlined style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`AttachedLinkDescription` }
        InputValue = {RecievedURL}
        // This is to change the Value of Title based on the input 
        onchangeValue={URLHandler} 
        name="Url"
        inputType={"text"} 
        widthValue={"425px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.ScheduleColor.UserInputBGC}
        FontColorValue={props.ScheduleColor.UserInputFC}
        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
        borderColorValue={props.ScheduleColor.BorderColor}    
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>


    return (URL)
}

export  {TitleContainer, DescriptionContainer, URLContainer};