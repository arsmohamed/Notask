import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal"; 
import FadeIn from "react-fade-in";
import {TitleContainer,DescriptionContainer,URLContainer} from "./Containers/TextInputContainer";
import {CalenderContianer,TimerContainer} from "./Containers/Date-TimeContainer";
import DisplayContainer from "./Containers/DisplayContainer";
import RDContainer from "./Containers/DaysContainer";
import SubmitButton from "./Containers/SubmitButton";
import { CloseCircleOutlined, CloseOutlined } from "@ant-design/icons"; 

// import MdDateRange from '@material-ui/icons/DateRange';
// import MdAddAlert from '@material-ui/icons/AddAlert';
// import MdRadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import MdRadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import { MdDateRange, MdAddAlert, MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

const EachateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`
const InfoContainer = styled.div`
    width: 470px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
` 

const Schedule = (props) => {
    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"24px", 
        marginLeft:"10px"
    }
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"6px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }
    const InValidStyle = {
        color : "red", 
        fontSize:"12px", 
        marginRight:"3px", 
        marginLeft:"37px"
    }
    const ValidStyle = {
        color : "Green", 
        fontSize:"12px", 
        marginRight:"3px", 
        marginLeft:"37px"
    }
    //Close ICion Area
    const CloseIcon = 
    (<CloseCircleOutlined
        onClick={()=> props.CallingCalendar(false)} 
        style={{marginRight: "4px", marginLeft: "95%", marginBottom: "15px",
            fontSize: "26px", color: props.ScheduleColor.IconC}} // send the color list from the parent App file 
    />)

    /*************************************************** Title Area *****************************************************************************/
    const [getTitle, ChangeTitle] = useState("");
    const [TitlePH, ChangeTitlePH] = useState("Title ...");
    const [ShowTitleMessage, ChangeTitleMessage] = useState(false)
    var TitleMessage = "Please Add Title"
    const isTitleMessage = <InfoContainer>
        <CloseOutlined style={InValidStyle}/>
        <span style={{
            color:"red", 
            textAlign: "center",  
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{TitleMessage}</span>
        </InfoContainer>
    const Title = <TitleContainer
            MaxLength={"45"}
            SubmitTitle={(value) => ChangeTitle(value)} //this is to return input value of the title and then send it to submit model
            SubmitTitlePlaceHolder={TitlePH} //this is to send the placeholder for the title area
            ScheduleColor={props.ScheduleColor}  // send the color list from the parent App file 
        />  

    /*************************************************** Description Area *****************************************************************************/
    const [getDescription, ChangeDescription] = useState("");
    const [DescriptionPH, ChangeDescriptionPH] = useState("Description ...");
    const [ShowDescriptionMessage, ChangeDescriptionMessage] = useState(false)
    var DescriptionMessage = "Please Add Description"
    const isDescriptionMessage = <InfoContainer>
        <CloseOutlined style={InValidStyle}/>
        <span style={{
            color:"red", 
            textAlign: "center",  
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{DescriptionMessage}</span>
        </InfoContainer>
    const Description = (
        <DescriptionContainer
        SubmitDescription={(value) => ChangeDescription(value)}
        SubmitDescriptionPlaceHolder={DescriptionPH}
        ScheduleColor={props.ScheduleColor}
        />
    );

    /*************************************************** URL Area *****************************************************************************/
    const [getURL, ChangeURL] = useState();
    const [URLPH, ChangeURLPH] = useState("Optional Attached Link For Description ...");
    const URL = (
        <URLContainer
        URLOption={(value) => ChangeURL(value)}
        SubmitURLPH={URLPH}
        ScheduleColor={props.ScheduleColor}
        />
    );

    /*************************************************** the data or repeated days *****************************************************************************/
    const [isShowTime, ChangeisShowTime] = useState(true) //to show the option to change the Time that the user selected
    const ShowData = <div onClick={()=>ChangeisShowTime(!isShowTime)}>
        {isShowTime ?  <MdRadioButtonUnchecked style={VisibilityStle} /> : <MdRadioButtonChecked style={VisibilityStle} /> }
    </div>
    const isData = <EachateContainer>
            <MdDateRange style={IconColor}/>   
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "50px"}}>Selected Data of Event</span>
        </EachateContainer>
    const isRepeated = <EachateContainer>
            <MdAddAlert style={IconColor}/>   
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "20px"}}>Select days of repeated Event and its Time</span>
        </EachateContainer>
    const IcionArea = <EachateContainer> 
            {ShowData}
            {isShowTime ? isData  :isRepeated }
        </EachateContainer>

    // Data From and To
    const [getFormDate, ChangeFormDate] = useState(); //this is the data that will be send to submit model to be added to the event list 
    const [getToDate, ChangeToDate] = useState();  //this is the data that will be send to submit model to be added to the event list 
    
    const StartDate= props.SendSelectedSD //This is the selected data in calendar
    const EndDate= props.SendSelectedED//This is the selected data in calendar  
    const Data = ( !isShowTime ? null :
        <CalenderContianer
        SendSD={StartDate} //This is to send back the selected started data
        SendED={EndDate} //This is to send back the selected ended data
        GetFromDate={(value) => ChangeFormDate(value)} //Returning the selected data that the user chose 
        GetToDate={(value) => ChangeToDate(value)} //Returning the selected data that the user chose 
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        /> 
    );

    /*************************************************** time Area *****************************************************************************/
    const [StartHours, ChangeStartHour] = useState(); //have returned starting hour if time is needed
    const [StartMinuts, ChangeStartMinuts] = useState(); //have returned starting minut if time is needed 
    const [EndHours, ChangeEndHour] = useState(); //have returned Ending hour if time is needed
    const [EndMinuts, ChangeEndMinuts] = useState(); //have returned Ending minut if time is needed 
    const [TimeClicked, ChangeTimeClicked] = useState() //this to make sure that time is included or not and show the repeated days model
    const [CheckETValidation, ChangeInvalidET] = useState(true)
    const [STClicked, ChangeSTClicked] = useState(false)
    const [ETClicked, ChangeETClicked] = useState(false)
    const Time = (
        <TimerContainer
            ETValidationValue={CheckETValidation} // Pass down validation TIme 
            FromHourSelected={(value) => ChangeStartHour(value)} // return starting hour if time is needed
            FromMinutsSelected={(value) => ChangeStartMinuts(value)} // return starting minut if time is needed 
            ToHourSelected={(value) => ChangeEndHour(value)} // return Ending hour if time is needed
            ToMinutsSelected={(value) => ChangeEndMinuts(value)} // return Ending minut if time is needed 
            ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
            isTime={(value) => ChangeTimeClicked(value)}
            STCValue={(value) => ChangeSTClicked(value)} //starting time if clicked 
            ETCValue={(value) => ChangeETClicked(value)} //starting time if clicked 
        />
        );
        
    /*************************************************** rebeated days Area *****************************************************************************/
    const [GetRepeatedDays, ChangeRepeatedDays] = useState()
    const RepeatedDays =( isShowTime ? null :<RDContainer
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        SubmitNumberOfRP={(value) => ChangeRepeatedDays(value)} //returning the value of repeated days 
        />
    );

    /*************************************************** Display Options Area *****************************************************************************/
    const [GetDiplayOption , ChangeDiplayOption] = useState()
    const DiplayOption =<DisplayContainer
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        SubmitDisplayOption={(value) => ChangeDiplayOption(value)} //returning the value of repeated days 
        /> 

    /*************************************************** Submit Buton  Area *****************************************************************************/

    const Submit = (
      <SubmitButton
        isLoggedIn={props.isLoggedIn}
        isCallingCalendar={(value) => props.CallingCalendar(value)} //return the close value to return to calender from the submit model
        isTitle={getTitle} //the Title value
        TitleMessage={(value) => ChangeTitleMessage(value)} // to show error if empty title
        CheckTitlePH={(value) => ChangeTitlePH(value)} //this is to change the title place holder if there is no title
        isDescription={getDescription} //the Description value
        DescriptionMessage={(value) => ChangeDescriptionMessage(value)} // to show error if empty description
        CheckDescriptionPH={(value) => ChangeDescriptionPH(value)} //this is to change the description placeholder if there is no placeholder
        isURL={getURL} //the URL value
        isStartingDate={isShowTime ? (STClicked ? (getFormDate + "T" +StartHours+":"+StartMinuts+":00") : (getFormDate + "T12:00:00") ) : undefined} //the value of the Starting data
        isEndingData={isShowTime ? (ETClicked ? (getToDate + "T" +StartHours+":"+StartMinuts+":00") : (getToDate + "T12:30:00") ) : undefined} //the value of Ending data
        //The starting and ending time only works with repeated days 
        isStartingTime={!isShowTime  ? (TimeClicked ?('12:00:00') :(StartHours+":"+StartMinuts+":00")) : undefined} //Choose Starting Time of the repeated Event
        isEndingTime={!isShowTime ? (TimeClicked ?('12:30:00') :(EndHours+":"+EndMinuts+":00")) : undefined} //Choose Ending Time of the repeated Event
        isRepeatedDays={!isShowTime ? GetRepeatedDays : undefined} //Values of Repeated Days
        isDisplayOption= {GetDiplayOption} //the value of the Display Option
        isEvent={props.submitEventValues} //returning the new event to the array of objects
        CheckingETValidation={(value)=>ChangeInvalidET(value)}
        RepeatOrData={isShowTime} // to check the time if it is on repeated days or just a noraml day 
      />
    );

    /*************************************************** Submit Form *****************************************************************************/
    const ScheduleForm = (
        <FadeIn>
            <NoteContainer
                position={"relative"}
                width={"520px"}
                margin={"30px auto 20px auto"}
                padding={"15px"}
                boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue={"7px"}
                resizeValue={"both"}
                backGroundColorValue={props.ScheduleColor.NotekBGC} //// send the color list from the parent App file 
                FontColorValue={props.ScheduleColor.NoteFC} //// send the color list from the parent App file 
                >
            {CloseIcon}
            {Title} 
            {ShowTitleMessage ? isTitleMessage : null}
            {Description}
            {ShowDescriptionMessage ? isDescriptionMessage : null}
            {URL}
            {IcionArea}
            {Data}
            {Time} 
            {RepeatedDays}
            {DiplayOption}
            {Submit}
            </NoteContainer> 
        </FadeIn>
    );

  return ScheduleForm;
};

export default Schedule;
