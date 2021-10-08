import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal";
import FadeIn from "react-fade-in"; 
import { CloseCircleOutlined } from "@ant-design/icons";
import EditButton from "./Bottons/EditButton";
import DeleteButton from "./Bottons/DeleteButton";
import EditEventForm from "./EditEventForm";

const CloseStyle = styled.div`
    width: 460px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`
const EachateContainer = styled.div`
    width: 460px;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
` 
const TitleStyle = styled.span`
  padding: 4px ;
  fontSize: 1.2em;
  margin-right: 8px;
  color: ${props => props.Coloring};
`
const ContentStyle = styled.span`
    padding: 5px ;
    fontSize: 1.2em;
    marginLeft: 20px;
    wordWrap: break-word;
    border: solid;
    border-width: thin;
    border-radius: 7px;
    border-color: #f5ba13;
    height: ${(props) => props.Height ? props.Height : "40px"};
    overflow: auto;
  `
const EventForm = (props) => { 
  // The Event information 
  const Header=<CloseStyle>
      <span style={{ 
        padding: "1px" ,paddingTop: "1px" , 
        fontSize: "1.2em", marginLeft: "150px",
        color: `${props.ScheduleColor.IconC}`}}>
          Event Info
      </span> 
      <CloseCircleOutlined
        onClick={()=> props.closedEventForm(true)} 
        style={{marginRight: "4px", marginLeft: "180px", marginBottom: "15px",
        fontSize: "26px", color: props.ScheduleColor.IconC}} // send the color list from the parent App file 
        />
    </CloseStyle>  

  //TItle Area props.ScheduleColor.IconC
  const isTitle =<EachateContainer JustifyContentCalue={""}>
      <TitleStyle Coloring={props.ScheduleColor.IconC}>Title : </TitleStyle> 
      <ContentStyle borderColor={props.ScheduleColor.IconC} >{props.EventClickedInfo.title}</ContentStyle> 
    </EachateContainer>

  //Description Area props.ScheduleColor.IconC
  const isDescription =<EachateContainer JustifyContentCalue={ ""}>
      <TitleStyle Coloring={props.ScheduleColor.IconC}>Description : </TitleStyle> 
      <ContentStyle Height={"100px"} >{props.EventClickedInfo.description}</ContentStyle> 
    </EachateContainer>
  //Url Area props.ScheduleColor.IconC
  const isUrl =<EachateContainer JustifyContentCalue={ ""}>
      <TitleStyle Coloring={props.ScheduleColor.IconC}>Url : </TitleStyle> 
      <ContentStyle >{  props.EventClickedInfo.url }</ContentStyle> 
    </EachateContainer>
    
  //Start Area props.ScheduleColor.IconC
  const isStart =<EachateContainer JustifyContentCalue={ ""}>
      <TitleStyle Coloring={props.ScheduleColor.IconC}>Start : </TitleStyle> 
      <ContentStyle >{props.EventClickedInfo.Start}</ContentStyle> 
    </EachateContainer>
    
  //End Area props.ScheduleColor.IconC
  const isEnd =<EachateContainer JustifyContentCalue={ ""}>
      <TitleStyle Coloring={props.ScheduleColor.IconC}>End : </TitleStyle> 
      <ContentStyle >{props.EventClickedInfo.End}</ContentStyle> 
    </EachateContainer>
  
  // The content Area
  const Content = <DateContainer>
      {isTitle}
      {isDescription}
      {isUrl}
      {isStart}
      {isEnd}
    </DateContainer>
  
  
  /***************************    Buttons to either change or delete  ************************************************/ 
  //EditButton Clicked
  const [CallEditForm, ChnageEditForm]= useState(false)
  //The edit button
  const isEditButton= <CloseStyle JustifyContentCalue={ ""}>
      <EditButton 
        isEditClicked={value=> ChnageEditForm(value)}
        ColorChange={props.ScheduleColor}
        />
      <DeleteButton
        isLoggedIn={props.isLoggedIn} // this is for checking if the user is logged in or not 
        EventsInfoList={props.PassedAllEvent} //list of all the Events created 
        IDofClickedEvent={props.EventClickedInfo.Id} //the clicked event ID 
        ReturnNewEvents={(value) => props.ChangeAllEvents(value)} //Delete selected event from all event and close model
        CloseModel={(value) => props.closedEventForm(value)} //to return true if clicked
        ColorChange={props.ScheduleColor} //Color list
        />  
    </CloseStyle>

  /***************************    Event Info  ************************************************/ 
  const EventInfo= <NoteContainer
      position={"relative"}
      width={"500px"}
      margin={"30px auto 20px auto"}
      padding={"15px"}
      boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
      borderRadiusValue={"7px"}
      resizeValue={"both"}
      backGroundColorValue={props.ScheduleColor.NotekBGC}
      FontColorValue={props.ScheduleColor.NoteFC}
    > 
      {Header}
      {Content}
      {isEditButton}
    </NoteContainer>
  
  /***************************    Edit Form Info  ************************************************/ 
  const EditFormInfo =<EditEventForm
      isLoggedIn={props.isLoggedIn} // this is for checking if the user is logged in or not 
      EventsInfoList={props.PassedAllEvent} //list of all the Events created and compare it with the changed one
      IDofClickedEvent={props.EventClickedInfo.Id} //the clicked event ID
      ChangeOldEvents={(value) => props.ChangeAllEvents(value)} //Delete selected event from all event and close model
      CloseModel={(value) => props.closedEventForm(value)} //to return true if clicked
      ReturnNewEvents={(value) => props.ChangeAllEvents(value)} //Delete selected event from all event and close model
      ScheduleColor={props.ScheduleColor}
      closedEventForm={props.closedEventForm}
      getTitle={props.EventClickedInfo.title} //The title
      getDescription={props.EventClickedInfo.description} //The Description
      getURL={props.EventClickedInfo.url} //The Url
      getStartedClickedEvent={props.isStartedDateEditEvent} //The started Date that is passed down from the CalendarForm
      getEndededClickedEvent={props.isEndedDateEditEvent} //The Ended Date that is passed down from the CalendarForm
      isStartedDay={props.StartedDay} //the values of data in numbers passed down from CalendarForm
      isStartedMonth={props.StartedMonth} //the values of data in numbers passed down from CalendarForm
      isStartedYear={props.StartedYear} //the values of data in numbers passed down from CalendarForm
      isEndedDay={props.EndedDay} //the values of data in numbers passed down from CalendarForm
      isEndedMonth={props.EndedMonth} //the values of data in numbers passed down from CalendarForm
      isEndedYear={props.EndedYear} //the values of data in numbers passed down from CalendarForm
    /> 

  return (
    <FadeIn>
      {CallEditForm ? EditFormInfo  :EventInfo}

    </FadeIn>
  );
};

export default EventForm;
