import React from "react";
import FadeIn from "react-fade-in";
import { LoginOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import { createEventId } from "../../event-utils";
import API from "../../../../API/API";

const SubmitButton = (props) => {
  const ButtonIconColor = {
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  };   
  
  var CreateEvent = {
    id: createEventId(),
    title: props.isTitle,
    description: props.isDescription,
    Url: props.isURL,
    start: props.isStartingDate,
    end: props.isEndingData,
    startTime: props.isStartingTime,
    endTime: props.isEndingTime,
    daysOfWeek: props.isRepeatedDays,
    display: props.isDisplayOption  
  };
  //this is for validation that the ending time is after the starting time 
  const SDTHourValidation = props.RepeatOrData ? props.isStartingDate.toString().slice(11, 13) : props.isStartingTime.toString().slice(0, 2)
  const SDTValue = parseInt(SDTHourValidation, 10)
  const EDTHourValidation = props.RepeatOrData ? props.isEndingData.toString().slice(11, 13) : props.isEndingTime.toString().slice(0, 2)
  const EDTValue = parseInt(EDTHourValidation, 10)
  const SDTMinValidation = props.RepeatOrData ? props.isStartingDate.toString().slice(14, 16) : props.isStartingTime.toString().slice(3, 5)
  const SDTMinValue = parseInt(SDTMinValidation, 10)
  const EDTMinValidation = props.RepeatOrData ? props.isEndingData.toString().slice(14, 16) : props.isEndingTime.toString().slice(3, 5)
  const EDTMinValue = parseInt(EDTMinValidation, 10)

  const SubmitEvent = async () => { 

    if (EDTValue < SDTValue) { props.CheckingETValidation(false)}
    else if (EDTValue === SDTValue && EDTMinValue < SDTMinValue) { props.CheckingETValidation(false)}
    else if( props.isTitle === "" && props.isDescription === ""){props.TitleMessage(true);props.DescriptionMessage(true);} 
    else if (props.isTitle === "" ) {props.TitleMessage(true) } 
    else if (props.isDescription === "") {props.TitleMessage(false)}
    else {
      if(props.isLoggedIn){
        return  API.CreateEvents(
          CreateEvent.title, 
          CreateEvent.description, 
          CreateEvent.Url, 
          CreateEvent.start, 
          CreateEvent.end, 
          (Event) => {
            CreateEvent=Event //changing the create event before sending it to the front end 
            props.isEvent((oldarr) => [...oldarr, CreateEvent])
            props.isCallingCalendar(false) 
          })
      }
      props.isEvent((oldarr) => [...oldarr, CreateEvent])
      props.isCallingCalendar(false) 
    }
    };

  const SubmitButton = (
    <FadeIn>
      <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginLeftValue={"35%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        IsCalledValue={"hover"}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        onClick={SubmitEvent}
        text={"Submit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );


  return SubmitButton;
};

export default SubmitButton;
