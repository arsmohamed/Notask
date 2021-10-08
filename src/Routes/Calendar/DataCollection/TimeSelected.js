import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../UI/Select";
import { HourValue, MinutsValue, TwelveHourSystemValue } from "./OptionsForm";
import { createEventId } from "../event-utils"; 

const OptionForm = (props) => {

  const [HourClicked, ChangeHourClicked]= useState(false)
  const [HourValueInput, ChangeHourValue] = useState("12");
  const handle = (e) => {
    props.name === "StartingTime" ? props.ChangeSTimeClicked(true) : props.ChangeETimeClicked(true)
    ChangeHourValue(e.target.value)
    ChangeHourClicked(!HourClicked)
  };
  const Hours = (
    <FadeIn>
      <SelectData
        key={HourValueInput.id + createEventId()}
        inputType={"text"}
        name="title"
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handle}
        InputValue={HourValueInput}
      >
        {
          <HourValue />
        }
      </SelectData>
    </FadeIn>
  );

  const [MinutsClicked, ChangeMinutsClicked] = useState(false)
  const [MinutsValueInput, ChangeMinutsValue] = useState((props.name==="EndingTime") ? "30" : "00");
  const handleMinuts = (e) => {
    props.name === "StartingTime" ? props.ChangeSTimeClicked(true) : props.ChangeETimeClicked(true)
    ChangeMinutsValue(e.target.value)
    ChangeMinutsClicked(!MinutsClicked)
  };
  const Minuts = (
    <FadeIn>
      <SelectData
        key={MinutsValueInput.id + createEventId()}
        inputType={"text"}
        name="title"
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleMinuts}
        InputValue={MinutsValueInput}
      >
        {
          <MinutsValue />
        }
      </SelectData>
    </FadeIn>
  );

  const [DayTimeClicked, ChangeDayTimeClicked]= useState(false)
  const [DaytimeValueInput, ChangeDaytimeValue] = useState("AM");
  const handleDaytime = (e) => {
    props.name === "StartingTime" ? (props.ChangeSTimeClicked(true)) : (props.ChangeETimeClicked(true))
    ChangeDaytimeValue(e.target.value)
    ChangeDayTimeClicked(!DayTimeClicked)
  };
  const DayTime = (
    <FadeIn>
      <SelectData
        key={DaytimeValueInput.id + createEventId()}
        inputType={"text"}
        name="title"
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleDaytime}
        InputValue={DaytimeValueInput}
      >
        {
          <TwelveHourSystemValue />
        }
      </SelectData>
    </FadeIn>
  );

  props.submitHourValue(HourClicked ? HourValueInput : "12");
  props.submitMinutsValue(MinutsValueInput ? MinutsValueInput : "00");
  props.submitDayValue(DayTimeClicked ? DaytimeValueInput : "AM");
   
  return [Hours, Minuts, DayTime];
};
export default OptionForm;