import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../UI/Select";
import {
  NumberOfYearsValue,
  NumberOfMonthsValue,
  NumberOfDaysValue,
} from "./OptionsForm";
import { createEventId } from "../event-utils";

const DateSelected = (props) => {
  // This part is changed once the user click on the drop down to see other options
  const [GetUserChangeDay, ChnageUserChangedDay] = useState(true);
  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [DayValueInput, ChangeDayValue] = useState(
      GetUserChangeDay
        ?( props.ReturnFrom === "From"
          ? props.ReturnClickedFromDay
          : props.ReturnClickedToDay)
        : ""
    );
  const [isChangedValueDay, changedValueDay] = useState(false); 
  const handleDays = (e) => (
    ChangeDayValue(e.target.value), ChnageUserChangedDay(false), changedValueDay(true)
  );
  const Days = (
    <FadeIn>
      <SelectData
        key={DayValueInput.id  + createEventId()}
        InputValue={DayValueInput}
        inputType={"text"}
        name={props.name == "start" ? "start" : "end"}
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={props.DisabledisClicked ? "" : "FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleDays}
      >
        {
          <NumberOfDaysValue/>
        }
      </SelectData>
    </FadeIn>
  );
   
  // This part is changed once the user click on the drop down to see other options
  const [GetUserChangeMonth, ChnageUserChangedMonth] = useState(true);
  /*
  This part is chicking if the input that the user entered is what is wanted or not 
  Once the select is clicked then it will change to normal dropdown with input number 
  */
 const[MonthValueInput, ChangeMonthValueInput] = useState(
   GetUserChangeMonth
    ? (props.ReturnFrom === "From"
        ? props.ReturnClickedFromMonth
        : props.ReturnClickedToMonth)
        : "")
  const [isChangedValueMonth, changedValueMonth] = useState(false); 
  const handleMonths = (e) => (
    ChangeMonthValueInput(e.target.value),
    ChnageUserChangedMonth(false),
    changedValueMonth(true)
    )
    
  const Months = (
    <FadeIn>
      <SelectData
        key={MonthValueInput + createEventId()}
        InputValue={MonthValueInput}
        inputType={"text"}
        name={props.name == "start" ? "start" : "end"}
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={props.DisabledisClicked ? "" : "FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleMonths}
      >
        {<NumberOfMonthsValue />}
      </SelectData>
    </FadeIn>
  );
  
  //This part is changed once the user click on the drop down to see other options
  const [GetUserChangeYear, ChnageUserChangedYear] = useState(true);
  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [YearsValueInput, ChangeYearsValueInput] = useState(
    GetUserChangeYear
      ?( props.ReturnFrom === "From"
        ? props.ReturnClickedFromYear
        : props.ReturnClickedToYear)
      : ""
    );
  const [isChangedValueYear, changedValueYear]= useState(false)
  const handleYears = (e) => (
    ChangeYearsValueInput(e.target.value) , 
    ChnageUserChangedYear(false),
    changedValueYear(true)
    )
  const Years = (
    <FadeIn>
      <SelectData
        key={YearsValueInput + createEventId()}
        InputValue={YearsValueInput}
        value="as"
        PlaceholderValue="asdfas"
        inputType={"text"}
        name={props.name == "start" ? "start" : "end"}
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
        onchangeValue={handleYears}
      >
        {
          <NumberOfYearsValue/>
        }
      </SelectData>
    </FadeIn>
  );
  
  //this is submitted to DropDownContainer
  const ReturnYear = (isChangedValueYear ? YearsValueInput : 
                      (props.ReturnFrom === "From"
                        ? 
                        props.ReturnClickedFromYear
                        : 
                        props.ReturnClickedToYear))
  const ReturnMonth = (isChangedValueMonth ? MonthValueInput : 
                      (props.ReturnFrom === "From"
                        ? 
                        props.ReturnClickedFromMonth
                        : 
                        props.ReturnClickedToMonth))
  const ReturnDay = (isChangedValueDay ? DayValueInput : 
                      (props.ReturnFrom === "From"
                        ? 
                        props.ReturnClickedFromDay
                        : 
                        props.ReturnClickedToDay))
  props.submitDateValue(ReturnYear + "-" + ReturnMonth + "-" + ReturnDay);

  return [Years, Months, Days];
};

export default DateSelected;
