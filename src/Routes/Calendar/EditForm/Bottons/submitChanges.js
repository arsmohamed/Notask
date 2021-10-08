import React from "react";
import FadeIn from "react-fade-in";
import { SendOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import API from "../../../../API/API";

const submitChanges = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  }  
    //this is for validation that the ending time is after the starting time 
    const SDTHourValidation = props.RepeatOrData ? props.isStartingDate.toString().slice(11, 13) : props.isStartingTime.toString().slice(0, 2)
    const SDTValue = parseInt(SDTHourValidation, 10)
    const EDTHourValidation = props.RepeatOrData ? props.isEndingData.toString().slice(11, 13) : props.isEndingTime.toString().slice(0, 2)
    const EDTValue = parseInt(EDTHourValidation, 10)
    const SDTMinValidation = props.RepeatOrData ? props.isStartingDate.toString().slice(14, 16) : props.isStartingTime.toString().slice(3, 5)
    const SDTMinValue = parseInt(SDTMinValidation, 10)
    const EDTMinValidation = props.RepeatOrData ? props.isEndingData.toString().slice(14, 16) : props.isEndingTime.toString().slice(3, 5)
    const EDTMinValue = parseInt(EDTMinValidation, 10)

  // this will delete the old event and send the new one
  const SubmitTheNewEvent = () => { 
      const ClickedEvent = props.PassEventsInfoList; //copy the Events list
      const id = props.TheIdOfClickedEvent; //the Event id
      let newEvent;
      let indexOfEvent;
      ClickedEvent.forEach((event, index) => {
        if (event.id == id || event._id == id) {
            newEvent = {...event};
            indexOfEvent = index;
          }
        });

      const newNotes = [...ClickedEvent]; 
      newEvent = {
        ...newEvent,
        id: props.TheIdOfClickedEvent,
        title: props.isTitle,
        description: props.isDescription,
        Url: props.isURL,
        start: props.isStartingDate,
        end: props.isEndingData,
        startTime: props.isStartingTime,
        endTime: props.isEndingTime,
        daysOfWeek: props.isRepeatedDays,
        display: props.isDisplayOption,
      };
      newNotes[indexOfEvent] = newEvent
      if (EDTValue < SDTValue) { props.CheckingETValidation(false)}
      else if (EDTValue === SDTValue && EDTMinValue < SDTMinValue) { props.CheckingETValidation(false)}
      else if( props.isTitle === "" && props.isDescription === ""){props.TitleMessage(true);props.DescriptionMessage(true);} 
      else {
        props.ReturnNewEvents(newNotes); 
        if(props.isLoggedIn){
            API.UpdateEvents(
              id,
              props.isTitle,
              props.isDescription,
              props.isURL,
              props.isStartingDate,
              props.isEndingData,
              props.isStartingTime,
              props.isEndingTime,
              props.isRepeatedDays,
              props.isDisplayOption
            )
          }

        props.isCloseModel(true);
    }
    
  };

  const SubmitButton = <FadeIn>
      <Button
        width={"130px"}
        marginBottomValue={"10px"}
        marginLeftValue={"160px"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        IsCalledValue={"hover"}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        onClick={SubmitTheNewEvent}
        text={"Submit"}
        icon={<SendOutlined style={ButtonIconColor}/>}
      />
    </FadeIn>

  return SubmitButton;
};

export default submitChanges;
