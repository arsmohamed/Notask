import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import HoverTitle from "./EditForm/HoverTitle";
import interactionPlugin from "@fullcalendar/interaction";
import EventForm from "./EditForm/EvenForm"; 

const CalendarForm = (props) => {
  const UserLocation = props.Location ? props.Location : "UTC"
  
  const weekendsVisible = true;
  const getEvent = props.SendingEvents;
  const [StartDate, ChangeStartData] = useState(""); // Save Selected Start Data
  const [EndDate, ChangeEndData] = useState(""); // Save Selected End Data
  props.GetStartDate(StartDate); // Send Selected Start Data
  props.GetEndDate(EndDate); // Send Selected End Data
  const [ShowEventClicked, ChangeShowEventClicekd] = useState(true); //to show event clicked

  /*************************************************** Clicked Event *****************************************************************************/
  //Returning the values of the event that is clicked to be showed
  const [ClickedEvent, ChangeClickedEvent] = useState({
    Id: "",
    title: "",
    description: "",
    url: "",
    Start: "",
    End: "",
    Display: "",
  });

  /*************************************************** Data Selected function Handler *****************************************************************************/
  const handleDateSelect = (selectInfo) => {
    /*
    ih here use splice to check if the ending data is bigger than the starting data just by 
    one day then return undifiended otherwise return the data
    */
    ChangeStartData(selectInfo.startStr); // Selected Start Data
    ChangeEndData(selectInfo.endStr); // Selected End Data
    props.CallingSchedule(true);
  };

  /*************************************************** handle month to change it to number *****************************************************************************/
  const [CreatedMonthsValues, ChangeMonths] = useState({
    Jan: { id: "01", name: "jan" },
    Feb: { id: "02", name: "Feb" },
    Mar: { id: "03", name: "Mar" },
    Apr: { id: "04", name: "Apr" },
    May: { id: "05", name: "May" },
    Jun: { id: "06", name: "Jun" },
    Jul: { id: "07", name: "Jul" },
    Aug: { id: "08", name: "Aug" },
    Sep: { id: "09", name: "Sep" },
    Oct: { id: "10", name: "Oct" },
    Nov: { id: "11", name: "Nov" },
    Dec: { id: "12", name: "Dec" },
  });

  //Event clicked handler
  const [isStartedDate, ChangeIsStartedDate] = useState("") // The value of the started clicked Data of event
  const [isStartedDay, ChangeIsStartedDays] = useState("") // The value of the started Day clicked Data of event
  const [isStartedMonth, ChangeIsStartedMonth] = useState("") // The value of the started Month clicked Data of event
  const [isStartedYear, ChangeIsStartedYear] = useState("") // The value of the started Year clicked Data of event

  const [isEndedDate, ChnageIsEndedDate] = useState("") //The value of the ended clicked Data of event
  const [isEndedDay, ChnageIsEndedDay] = useState("") //The value of the ended Day clicked Data of event
  const [isEndedMonth, ChnageIsEndedMonth] = useState("") //The value of the ended Month clicked Data of event
  const [isEndedYear, ChnageIsEndedYear] = useState("") //The value of the ended year clicked Data of event
 
  /*************************************************** Clicked Event Handler *****************************************************************************/
  const handleEventClick = async (clickInfo) => {
        ChangeShowEventClicekd(false); 
        //Starting Date
        const StartedDayValue = clickInfo.event._instance.range.start.toString().slice(8, 10) //Day
        ChangeIsStartedDays(StartedDayValue);
        const StartedMonthValue = clickInfo.event._instance.range.start.toString().slice(4, 7) //Month
        ChangeIsStartedMonth(Object.values(CreatedMonthsValues).map( value => { if (value.name == StartedMonthValue) {return value.id;} }).filter(item => item)[0]) //Changing Month to number
        const StartedYearValue = clickInfo.event._instance.range.start.toString().slice(11, 15) //Year 
        ChangeIsStartedYear(StartedYearValue)
        
        //ending Date
        const EndedDayValue = clickInfo.event._instance.range.end.toString().slice(8, 10) //Day
        ChnageIsEndedDay(EndedDayValue);
        const EndedMonthValue = clickInfo.event._instance.range.end.toString().slice(4, 7) //Month
        ChnageIsEndedMonth(Object.values(CreatedMonthsValues).map( value => { if (value.name == EndedMonthValue) { return value.id; } }).filter(item => item)[0]) //Changing Month to number
        const EndedYearValue = clickInfo.event._instance.range.end.toString().slice(11, 15) //Year 
        ChnageIsEndedYear(EndedYearValue);
        
        //save the starting data for edit form event
        ChangeIsStartedDate(
            clickInfo.event._instance.range.start.toString().slice(4, 15)
          ); 
        //save the starting data for edit form event
        ChnageIsEndedDate(  
            clickInfo.event._instance.range.end.toString().slice(4, 15)
          );

        if (props.isLoggedIn) {
          return ChangeClickedEvent({
            Id: clickInfo.event._def.extendedProps._id,
            title: clickInfo.event._def.title,
            description: clickInfo.event._def.extendedProps.description,
            url: clickInfo.event._def.extendedProps.Url,
            Start: clickInfo.event._instance.range.start
              .toString()
              .slice(0, 15),
            End: clickInfo.event._instance.range.end.toString().slice(0, 15),
            Display: clickInfo.event._def.ui.display,
          });
        }
        ChangeClickedEvent({
          Id: clickInfo.event._def.publicId,
          title: clickInfo.event._def.title,
          description: clickInfo.event._def.extendedProps.description,
          url: clickInfo.event._def.extendedProps.Url,
          Start: clickInfo.event._instance.range.start.toString().slice(4, 15),
          End: clickInfo.event._instance.range.end.toString().slice(4, 15),
          Display: clickInfo.event._def.ui.display,
        })
    };

  
  /*************************************************** Hover Event Title *****************************************************************************/
  const [toggeltTitle, ChangeToggleTitle] = useState(false)
  const [TitleValue, ChangeTitleValue] = useState("")
  const [StartValue, ChangeStartValue] = useState("")
  const HandleMouseEnter = (value) => {
    const ReturnToggle = () => (
        ChangeToggleTitle(true),
        ChangeTitleValue(value.event._def.title),
        ChangeStartValue(value.event._instance.range.start.toString().slice(0, 24)))
      return(props.isLoggedIn ? setTimeout(ReturnToggle,500) : null)
  }
  const HandleMouseLeave = () => {
    const FinishToggle = () => (ChangeToggleTitle(false), ChangeTitleValue(""))
    return(setTimeout(FinishToggle,500))
  }
  const ShowTitle = props.isLoggedIn ? <div style={{ zIndex: "3", position: "absolute", left: "35%", top: "0px", marginTop: "52px" }}>
    <HoverTitle 
      ScheduleColor={props.CalendarColor} //send color form App
      isTitle={TitleValue} //Passing Down the title
      isStart={StartValue} //Passing Down the time
      />
    </div> : null
    

  /*************************************************** calendar Form *****************************************************************************/
  const recievedLang = props.TheCalendarLanf 
  const FullCalendarForm = <div
      style={{
        zIndex: "1",
        filter: ShowEventClicked ? null : "blur(4px)",
        pointerEvents: ShowEventClicked ? null : "none",
        color: props.CalendarColor.CalendarTC,
        height: "840px"
      }} 
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,list",
          }}
        initialView="dayGridMonth"
        titleFormat={{ month: "short", year: "numeric", day: "numeric" }} //this is for the tile what should be there for the user
        height="810px" //get fixed height for the calendar
        contentHeight="80%" //get the content height for the calendar
        handleWindowResize="true"
        locale={recievedLang} //this is for the languages option
        timeZone={UserLocation} //to get the time zone of your location that is why we will be using the location in the sigup or make the browser detecte it
        editable={true} //to edit the info
        selectable={true} //to enable selection
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        eventTextColor="black" //this is for the styling of the text for each event
        eventBackgroundColor="cornflowerblue" //This is for the background of each event
        eventBorderColor="pink" //The border color
        select={handleDateSelect}
        events={getEvent}
        eventClick={handleEventClick} 
        eventMouseEnter={HandleMouseEnter}
        eventMouseLeave={HandleMouseLeave}
      />
    </div>

  /*************************************************** Event Form *****************************************************************************/
  const eventform = (
    <div style={{ zIndex: "3", position: "absolute", left: "35%", top: "10%" }}>
      <EventForm
        isLoggedIn={props.isLoggedIn} //to check if the user is logged or not
        ScheduleColor={props.CalendarColor} //send color form App
        closedEventForm={(value) => ChangeShowEventClicekd(value)}
        EventClickedInfo={ShowEventClicked ? null : ClickedEvent} //pass downt the info about the clicked data
        PassedAllEvent={props.SendingEvents} //copy of the event so we can compare the id and delete it
        isStartedDateEditEvent={isStartedDate} //The value of the started Clicked Event
        isEndedDateEditEvent={isEndedDate} //The value of the Ended Clicked Event
        ChangeAllEvents={(value) => props.ChangeEvents(value)} //Delete the selected event
        StartedDay={isStartedDay} //this is the value of the date in number
        StartedMonth={isStartedMonth} //this is the value of the date in number
        StartedYear={isStartedYear} //this is the value of the date in number
        EndedDay={isEndedDay} //this is the value of the date in number
        EndedMonth={isEndedMonth} //this is the value of the date in number
        EndedYear={isEndedYear} //this is the value of the date in number
      />
    </div>
  );


  return (
    <div>
      {toggeltTitle? ShowTitle : null}
      {ShowEventClicked ? null : eventform}
      {FullCalendarForm}
    </div>
  );
};

export default CalendarForm;