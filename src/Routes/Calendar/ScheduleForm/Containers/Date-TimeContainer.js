import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined, ClockCircleOutlined, CloseOutlined, CheckCircleFilled} from "@ant-design/icons"; 
import TimeSelected from '../../DataCollection/TimeSelected'; 
import { MdRadioButtonUnchecked } from "react-icons/md";


const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 14px;
`
const EachateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
    margin-left: ${props => props.MarginLeft ? props.MarginLeft : null }
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const CalenderContianer = (props) => {
    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }
    
    // This is a togole to change the state of the disabled and to change the icion as well 
    const InconArea = <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><CalendarOutlined style={IconColor}/> </FadeIn> 
        </div>

    //This is for the layout for Year Month Days 
    const InfoArea = <EachateContainer JustifyContentCalue={"space-between" }>
            {<FadeIn><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginLeft: "150px"}}>Selected Data</span></FadeIn>}
        </EachateContainer>

    //Starting Data Area
    const StartingData = <EachateContainer JustifyContentCalue={ ""}>
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
            { <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px", color:props.ScheduleColor.IconC}}>{props.SendSD}</span></FadeIn> }
        </EachateContainer>
    
    // End Data Area
    const EndingingData = <EachateContainer JustifyContentCalue={ ""}>
            <FadeIn><span style={{  padding: "4px" , fontSize: "1.2em", marginRight: "25px"}}>To</span></FadeIn>
            { <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px", color:props.ScheduleColor.IconC }}>{props.SendED}</span></FadeIn> }
        </EachateContainer>
    
    //This is the returned Date to the calendar
    const calendar = <InfoContainer>
            {InconArea}
            <DateContainer>
                {InfoArea}
                {StartingData}
                {EndingingData}
            </DateContainer>
        </InfoContainer>

    //To recieve a prop that will change the value from and to inside the schedule form to the value of From/to Date that has been created here  
    props.GetFromDate(props.SendSD) //Return either the selected data from the calendar form or the changed data by the user
    props.GetToDate(props.SendED) //Return either the selected data from the calendar form or the changed data by the user
    
    return(calendar)
}

const TimerContainer = (props) => {
    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px"
    }
    //DateStyle and unDateStyle color style 
    const ShowDateStle = {
        marginRight: "4px", 
        marginLeft:"51px",
        marginTop:"7px" , 
        fontSize: "18px", 
        color : props.ScheduleColor.IconC
    }
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"7px" , 
        fontSize: "18px", 
        color : props.ScheduleColor.IconC
    }
    const InValidStyle = {
        color : "red", 
        fontSize:"17px",  
        marginLeft: "55px",
        marginRight: "5px",
    } 
        
    const [isShowTime, ChangeisShowTime] = useState(true) //to show the option to change the Time that the user selected
    //this is the part where we change the icon based on clicking the div 
    const ShowData = <FadeIn>
        {isShowTime ?  null : 
            <CheckCircleFilled 
                onClick={()=>ChangeisShowTime(true)}
                style={VisibilityStle} />} 
        </FadeIn>
    const IcionArea = <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><ClockCircleOutlined style={IconColor}/>  </FadeIn>
            <FadeIn>{ShowData}</FadeIn>
        </div>
    const isDefulatTime = 
        <DateContainer>
            <FadeIn>
                <EachateContainer>
                {isShowTime ? <MdRadioButtonUnchecked onClick={()=>ChangeisShowTime(false)} style={ShowDateStle}/> : null}  
                    <span style={{paddingTop: "6px" ,fontSize: "1em", marginLeft: "5px"}}>By defualt the time set to 12 am </span> 
                </EachateContainer>
            </FadeIn>
            <FadeIn><span style={{paddingBottom: "4px" ,fontSize: "1em", marginLeft: "60px"}}>Click the Circle to choose certain time</span></FadeIn>
        </DateContainer>

    //This is for the layout for Hour Minuts Day system
    const InfoArea = (isShowTime ? 
        isDefulatTime
        :
        <EachateContainer JustifyContentCalue={"space-between" }>
                    <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}> </span></FadeIn> 
                    <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{"Hour"}</span></FadeIn> 
                    <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{"Minuts"}</span></FadeIn> 
                    <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{"AM / PM"}</span></FadeIn> 
        </EachateContainer>
    );
    
    //collection of stating time for event
    const [StartHoursValue, ChangeStartHourValue ]= useState() //save the Starting Hour
    const [StartMinutsValue, ChangeStartMinutsValue ]= useState() //save the starting Minuts
    const [StartDayValue, ChangeStartDayValue ]= useState() //save starting if it is AM or PM
    const [STimeClicked, ChangeSTimeClicked]= useState(false)
    props.STCValue(STimeClicked)

    const StartingTime = isShowTime ? null :  
        <EachateContainer JustifyContentCalue={"space-between" }>
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>Start</span></FadeIn>
            <TimeSelected 
                name={"StartingTime"}
                ChangeSTimeClicked={(value) => ChangeSTimeClicked(value)}
                submitHourValue={(value) => ChangeStartHourValue(value)}
                submitMinutsValue={(value) => ChangeStartMinutsValue(value)}
                submitDayValue={(value) => ChangeStartDayValue(value)}
                RecievedColor={props.ScheduleColor}
                />
        </EachateContainer>
    
    
    //collection of ending time for event
    const [EndHoursValue, ChangeEndHourValue ]= useState() //save the Ending Hour
    const [EndMinutsValue, ChangeEndMinutsValue ]= useState() //save the Ending Minuts
    const [EndDayValue, ChangeEndDayValue ]= useState() //save Ending if it is AM or PM
    const [ETimeClicked, ChangeETimeClicked]= useState(false)
    props.ETCValue(ETimeClicked)

    const inValidET= props.ETValidationValue //this is for only if the ending time is not bigger than starting time 
    var inValidEndingTime = inValidET ? null : "Please Change the Time value to be valid"
    const inValidEndInput =  <InfoContainer>
            {inValidET ? null : <FadeIn><CloseOutlined style={InValidStyle}/></FadeIn>}
            <FadeIn><span style={{
                color: inValidET ? "#22e822" : "red", 
                textAlign: "center",  
                fontSize: "17px",
                fontFamily: "Arial"
            }}
            >{inValidEndingTime}</span></FadeIn>
        </InfoContainer> 
    const EndingTime = isShowTime ? null :<DateContainer>
            <EachateContainer  MarginLeft={"10px"}  JustifyContentCalue={"space-between" }>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>End</span></FadeIn>
                <TimeSelected 
                    name={"EndingTime"}
                    ChangeETimeClicked={(value) => ChangeETimeClicked(value)}
                    submitHourValue={(value) => ChangeEndHourValue(value)}
                    submitMinutsValue={(value) => ChangeEndMinutsValue(value)}
                    submitDayValue={(value) => ChangeEndDayValue(value)}
                    RecievedColor={props.ScheduleColor}
                    />
            </EachateContainer> 
            {inValidEndInput}
        </DateContainer>

 
    const time = (
      <InfoContainer>
        {IcionArea}
        <DateContainer>
          {InfoArea}
          {StartingTime}
          {EndingTime}
        </DateContainer>
      </InfoContainer>
    );

    props.FromHourSelected(STimeClicked ? (StartDayValue === "PM" ? String(parseInt(StartHoursValue,10) + 12) : StartHoursValue): "12") //this where we convert the returned hour from 12 hour system to 24 hour system 
    props.FromMinutsSelected(STimeClicked ? StartMinutsValue : "00")
    props.ToHourSelected(STimeClicked ? (EndDayValue === "PM" ? String(parseInt(EndHoursValue,10) + 12) : EndHoursValue) : "12") //this where we convert the returned hour To 12 hour system to 24 hour system 
    props.ToMinutsSelected(STimeClicked ? EndMinutsValue : "00");
    props.isTime(isShowTime) 
    return (time)
}

export  {CalenderContianer, TimerContainer};