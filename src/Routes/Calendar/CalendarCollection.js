import React, { useState, useEffect } from "react"; 
import CalendarForm from "./CalendarForm";
import ScheduleForm from "./ScheduleForm/Schedule";
import styled from "styled-components";  
import API from "../../API/API";

const CalenderContainer = styled.div`
  z-index: "1";
  margin: 10px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  color: cornflowerblue;
`; 
const CalendarCollection = (props) => {

  /*************************************************** Evets List *****************************************************************************/
  //Collection of Events
  const [currentEvents, ChangeEventList] = useState([]); 
  //using componet did mount using useffect
  useEffect( () => {
    async function CheckingIsLoggedIn() {
      const isLoggedIn = await API.isLoggedIn(() => {});
      if (isLoggedIn) {
        const PrevEvents = currentEvents 
        const DBEvents = await API.GetEvents();
        const MergedNotes = DBEvents.data.concat(PrevEvents);
        ChangeEventList(MergedNotes );
      }
    }

    CheckingIsLoggedIn()
  } , []) 
  
  const [showSchedule, ChangeShowSchedule ] =useState(false) // to show the shedule model 
  const [SelectedStartedData, ChangeStartedData] = useState() //started selected data 
  const [SelectedEndedData, ChangeEndedData] = useState(); // ended slected data  

  /*************************************************** calendar Form *****************************************************************************/
  //the calendar form 
  const calendarForm = 
    (<div style={{zIndex:"1", filter: !showSchedule ? null : "blur(4px)",
          pointerEvents:!showSchedule ? null : "none"}}>
        <CalendarForm
          isLoggedIn={props.isLoggedIn}
          CalendarColor={props.RecieveColor} //send color form App
          SendingEvents={currentEvents} //Pass down the list of eventsRecieveColor
          CallingSchedule={(value) => ChangeShowSchedule(value)} //to call schedule
          GetStartDate={(value) => ChangeStartedData(value)} //getting started clicked data
          GetEndDate={(value) => ChangeEndedData(value)} //getting ended clicked data 
          ChangeEvents={(value) => ChangeEventList(value)}
          TheCalendarLanf={props.ReturnLang}
          Location={props.Location} //the location that the user inputed
        />
    </div>
    );
  /*************************************************** scheduling Form *****************************************************************************/
  //scheduling event is called 
  const scheduleForm = (
    <div style={{ zIndex: "3", position: "absolute", left: "35%", top: "10%" }}>
      <ScheduleForm
        isLoggedIn={props.isLoggedIn}
        submitEventValues={(value) => ChangeEventList(value)}
        ScheduleColor={props.RecieveColor} //send color form App
        CallingCalendar={(value) => ChangeShowSchedule(value)} //to call calendar back
        SendSelectedSD={SelectedStartedData} //Selected Start Data
        SendSelectedED={SelectedEndedData} //Selected End Data
      />
    </div>
  ); 
  
  return (
    <CalenderContainer>
      {showSchedule ? scheduleForm : null}
      {calendarForm}
    </CalenderContainer>
  );
};
export default CalendarCollection;
