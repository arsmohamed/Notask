import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal"; 
import {TitleContainer,DescriptionContainer,URLContainer} from "./Containers/TextInputContainer";
import {CalenderContianer,TimerContainer} from "./Containers/Date-TimeContainer";
import DisplayOption from "./Containers/DisplayContainer";
import RDContainer from "../ScheduleForm/Containers/DaysContainer"; 
import SubmitChanges from './Bottons/submitChanges'; 
import FadeIn from "react-fade-in";
import { CloseCircleOutlined, EditFilled, EditOutlined } from "@ant-design/icons"; 
import { MdDateRange, MdAddAlert } from "react-icons/md";


const EachateContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`

const EditEventForm = (props) => {

    //All Component Color Stle
    const IconColor = {
      color: props.ScheduleColor.IconC,
      fontSize: "24px",
      marginTop: "2px",
      marginLeft: "60px",
    };
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"7px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }
    //DateStyle and unDateStyle color style 
    const ShowDateStle = {
        marginRight: "4px", 
        marginLeft:"60px",
        marginTop:"7px" , 
        fontSize: "18px", 
        color : props.ScheduleColor.IconC
    }
    
    // The Event information 
    const Header= <EachateContainer JustifyContentCalue={"flex-end"}>
        <span style={{ 
            padding: "1px" ,paddingTop: "1px" , 
            fontSize: "1.2em", marginLeft: "150px",
            color: `${props.ScheduleColor.IconC}`}}>
                Event Info
        </span> 
        <CloseCircleOutlined
            onClick={()=> props.closedEventForm(true)} 
            style={{marginRight: "12px", marginLeft: "180px", marginBottom: "15px",
            fontSize: "26px", color: props.ScheduleColor.IconC}} // send the color list from the parent App file 
        />
    </EachateContainer>  

    //Title Area
    const [getTitle, ChangeTitle] = useState("");
    const Title = <TitleContainer
            SubmitTitle={(value) => ChangeTitle(value)} //this is to return input value of the title and then send it to submit model
            isEditTitle={props.getTitle} //this is to send the placeholder for the title area
            ScheduleColor={props.ScheduleColor}  // send the color list from the parent App file 
        />  

     //Description Area
    const [getDescription, ChangeDescription] = useState("");
    const Description = (
        <DescriptionContainer
        SubmitDescription={(value) => ChangeDescription(value)}
        isEditDescription={props.getDescription}
        ScheduleColor={props.ScheduleColor}
        />
    );

     //URL Area
    const [getURL, ChangeURL] = useState("");
    const URL = (
        <URLContainer
        URLOption={(value) => ChangeURL(value)}
        isEditURL={props.getURL}
        ScheduleColor={props.ScheduleColor}
        />
    );
    
    /***************************    Repeat Area  ************************************************/ 
    //This is to show either the data or repeated days
    const [isShowTime, ChangeisShowTime] = useState(true) //to show the option to change the Time that the user selected
    const ShowData = isShowTime ?  
        <EditOutlined  
            onClick={()=>ChangeisShowTime(false)}
            style={VisibilityStle} 
        /> 
        : 
        <EditFilled 
            onClick={()=>ChangeisShowTime(true)}
            style={VisibilityStle} 
        /> 
    //This is for the layout for Year Month Days 
    const InfoArea = <EachateContainer>
            <MdDateRange style={IconColor}/>
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "20px"}}>Selected Data</span>
        </EachateContainer>
    const isRepeated = <EachateContainer>
            <MdAddAlert style={IconColor}/>   
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "20px"}}>Select days of repeated Event and its Time</span>
        </EachateContainer>
    //This is for the Data area or the Repeated Date area
    const IcionArea = <EachateContainer> 
        {ShowData} 
        {isShowTime ? InfoArea : isRepeated }
        </EachateContainer>

    /***************************    Date Area  ************************************************/ 
    // Data From and To
    const [getFormDate, ChangeFormDate] = useState(); //this is the data that will be send to submit model to be added to the event list 
    const [getToDate, ChangeToDate] = useState();  //this is the data that will be send to submit model to be added to the event list 

    const StartDate= props.getStartedClickedEvent //This is the selected data in calendar for edit passing down from EventForm
    const EndDate= props.getEndededClickedEvent//This is the selected data in calendar  for edit passing down from EventForm
    
    const [EditTime, ChangeEditedTime ] = useState()
    const Data = !isShowTime ? null : (
      <CalenderContianer
            SendSD={StartDate} //This is to send back the selected started data
            SendED={EndDate} //This is to send back the selected ended data
            GetFromDate={(value) => ChangeFormDate(value)} //Returning the selected data that the user chose
            GetToDate={(value) => ChangeToDate(value)} //Returning the selected data that the user chose
            GetIsSelectedDate={(value) => ChangeEditedTime(value)} //To pass down to Time to show when the user want to chagne time
            ScheduleColor={props.ScheduleColor} // send the color list from the parent App file
            PassIsStartedDay={props.isStartedDay} //passing down the data in number from Event Form
            PassIsStartedMonth={props.isStartedMonth} //passing down the data in number from Event Form
            PassIsStartedYear={props.isStartedYear} //passing down the data in number from Event Form
            PassIsEndedDay={props.isEndedDay} //passing down the data in number from Event Form
            PassIsEndedMonth={props.isEndedMonth} //passing down the data in number from Event Form
            PassIsEndedYear={props.isEndedYear} //passing down the data in number from Event Form
      />
    );

    /***************************    Time Area  ************************************************/ 
    //This is for the time
    const [StartHours, ChangeStartHour] = useState(); //have returned starting hour if time is needed
    const [StartMinuts, ChangeStartMinuts] = useState(); //have returned starting minut if time is needed 
    const [EndHours, ChangeEndHour] = useState(); //have returned Ending hour if time is needed
    const [EndMinuts, ChangeEndMinuts] = useState(); //have returned Ending minut if time is needed 
    const [TimeClicked, ChangeTimeClicked] = useState() //this to make sure that time is included or not and show the repeated days model
    const [CheckETValidation, ChangeInvalidET] = useState(true)
    const [STClicked, ChangeSTClicked] = useState(false)
    const [ETClicked, ChangeETClicked] = useState(false)
    const Time = ( EditTime ? null :
        <TimerContainer
            FromHourSelected={(value) => ChangeStartHour(value)} // return starting hour if time is needed
            FromMinutsSelected={(value) => ChangeStartMinuts(value)} // return starting minut if time is needed 
            ToHourSelected={(value) => ChangeEndHour(value)} // return Ending hour if time is needed
            ToMinutsSelected={(value) => ChangeEndMinuts(value)} // return Ending minut if time is needed 
            ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
            isTime={(value) => ChangeTimeClicked(value)}
            ETValidationValue={CheckETValidation} // Pass down validation TIme 
            STCValue={(value) => ChangeSTClicked(value)} //starting time if clicked 
            ETCValue={(value) => ChangeETClicked(value)} //starting time if clicked 
        />
        );
        
    /***************************    rebeated Option Area  ************************************************/ 
    const [GetRepeatedDays, ChangeRepeatedDays] = useState()
    const RepeatedDays =( isShowTime ? null :<RDContainer
            ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
            SubmitNumberOfRP={(value) => ChangeRepeatedDays(value)} //returning the value of repeated days 
        />
    );
    
    /***************************    Display Option Area  ************************************************/ 
    const [GetDiplayOption , ChangeDiplayOption] = useState()
    const Display = <DisplayOption
            ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
            SubmitDisplayOption={(value) => ChangeDiplayOption(value)} //returning the value of repeated days 
        />

    /***************************    Submit New Changes Area  ************************************************/ 
    const submitChanges = <SubmitChanges 
        isLoggedIn={props.isLoggedIn} // this is for checking if the user is logged in or not 
        PassEventsInfoList={props.EventsInfoList}//list of all the Events created and compare it with the changed one
        TheIdOfClickedEvent={props.IDofClickedEvent} //the clicked event ID
        ReturnChangedEvents={(value) => props.ChangeOldEvents(value)} //Delete selected event from all event and close model
        isCloseModel={(value) => props.CloseModel(value)} //to return true if clicked
        isTitle={getTitle} //the Title value
        isDescription={getDescription} //the Description value
        isURL={getURL} //the URL value
        isStartingDate={isShowTime ? (STClicked ? (getFormDate + "T" +StartHours+":"+StartMinuts+":00") :(getFormDate + "T12:00:00")) : undefined} //the value of the Starting data
        isEndingData={isShowTime ? (ETClicked ? (getToDate + "T" +StartHours+":"+StartMinuts+":00") : (getToDate + "T12:30:00") ) : undefined} //the value of Ending data
        isRepeatedDays={!isShowTime ? GetRepeatedDays : undefined} //Values of Repeated Days
        isStartingTime={!isShowTime ? (TimeClicked ?('12:00:00') :(StartHours+":"+StartMinuts+":00")) : undefined} //Choose Starting Time of the repeated Event
        isEndingTime={!isShowTime ? (TimeClicked ?('12:30:00') :(EndHours+":"+EndMinuts+":00")) : undefined} //Choose Ending Time of the repeated Event
        ReturnNewEvents={(value) => props.ReturnNewEvents(value)}
        isDisplayOption= {GetDiplayOption} //the value of the Display Option
        ColorChange={props.ScheduleColor} 
        CheckingETValidation={(value)=>ChangeInvalidET(value)}
        RepeatOrData={isShowTime} // to check the time if it is on repeated days or just a noraml day 
    />;

    const EditForm = (
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
          {Header}
          {Title}
          {Description}
          {URL}
          {IcionArea}
          {Data}
          {Time}
          {RepeatedDays}
          {Display}
          {submitChanges}
        </NoteContainer>
      </FadeIn>
    );

  return EditForm;

}

export default EditEventForm;
