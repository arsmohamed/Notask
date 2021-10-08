import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import Inputdata from '../../../UI/UserInput';
import { createEventId } from "../event-utils";


const RepeatDaySelected = (props) => {
    const [NumberOfRepeatedDays,ChangeNumberOfRepeatedDays] = useState([]) 
    const [Days,changeDays] = useState({
        Sunday: {id: "0", value: false},
        Monday: {id: "1", value: false},
        Tuesday: {id: "2", value: false},
        Wednesday: {id: "3", value: false},
        Thursday: {id: "4", value: false},
        Friday: {id: "5", value: false},
        Saturday: {id: "6", value: false}
    })
    const ChoosenDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] 
    const handleRepeatedDays = (e) => {
        const newDays = {...Days}
        const onchangeValue = e.target.value
        newDays[onchangeValue].value = !newDays[onchangeValue].value
        changeDays(newDays)
        //Returning the value of id of each day if it is clicked 
        ChangeNumberOfRepeatedDays(Object.values(Days).map(item => {
            if (item.value) return item.id
        }).filter(item => item))
    }
    
    const RepeatedDayContainer = (DayValue,OnChangeInputValue) => {
        return [<Inputdata 
            key={NumberOfRepeatedDays.id + createEventId()}
            inputType={"checkbox"}
            name="title"
            widthValue={"20px"}
            paddingVale={"2px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            borderRadiusValue= {"7px"}
            backGroundColorValue={ props.RecievedColor.UserInputBGC}
            FontColorValue={props.RecievedColor.UserInputFC}
            PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
            borderColorValue={props.RecievedColor.BorderColor} 
            BorderValue={"solid"}
            borderWidthValue={"thin"}
            marginRightValue={"5px"}
            marginTopValue={"4px"}
            checked={Days[DayValue].value}
            onchangeValue = {OnChangeInputValue}
            InputValue = {DayValue}
            ></Inputdata>,
            <label key={NumberOfRepeatedDays.id} style={{marginRight: "10px"}}>{DayValue}</label>]
        }
        
    const LineOne = [RepeatedDayContainer(ChoosenDay[0],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[1],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[2],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[3],handleRepeatedDays)]
    const LineTwo = [RepeatedDayContainer(ChoosenDay[4],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[5],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[6],handleRepeatedDays)]
    
    props.ValueOfRepeatedDays(NumberOfRepeatedDays);
    return (  
    <FadeIn>
        <div style={{display: "flex",width: "50px", flexDirection: "row"}}>
             {LineOne} 
        </div>
        <div style={{
            display: "flex",
            width: "50px", 
            flexDirection: "row", 
            marginTop: "10px", 
            marginLeft: "70px", 
            marginBottom: "8px"}}
        >
             {LineTwo} 
        </div>
    </FadeIn>
       )
}

export default RepeatDaySelected;