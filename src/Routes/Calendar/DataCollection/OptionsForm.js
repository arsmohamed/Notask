import React from "react";
import { createEventId } from "../event-utils";

/*************************************************** Hours Value *****************************************************************************/
const HourValue = () => {

    const Hours = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const DailyHours = (
        [Hours.map((Hour, index) => 
            <option  key={index.id + createEventId()} value={Hour}>{Hour}</option>)]
        )
    return(DailyHours)
}
/*************************************************** Minuts Value *****************************************************************************/
const MinutsValue = () => {

    //this is for the hour input 
    const Minuts = ['00','05','10','15','20','25','30','35','40','45','50','55']
    const DailyMinut =(
        [Minuts.map((Minut, index) => 
            <option key={index.id + createEventId()} value={Minut}>{Minut}</option>)]
        )
    return(DailyMinut)
}
/*************************************************** AM / PM *****************************************************************************/
const TwelveHourSystemValue = () => {

    //this for either AM or PM
    const TwelveHourSystem = ['AM','PM']
    const DayDivided =(
        [TwelveHourSystem.map((DayTime, index) => 
            <option key={index.id + createEventId()} value={DayTime}>{DayTime}</option>)]
        )
    return(DayDivided)
}
/*************************************************** Number Of Years Value *****************************************************************************/
const NumberOfYearsValue = () => { 
    //this is for the years from this year 
    const NumberOfYears = [ '2020','2021', '2022', '2023', '2024','2025', '2026', 
                            '2027', '2028', '2029', '2030', '2031', '2032','2033', 
                            '2034','2035', '2036', '2037', '2038', '2039','2040']
    const YearContainer = (
        [NumberOfYears.map((year, index) => <option    key={index.id + createEventId()} value={year}>{year}</option>)]
    )
    
    return(
        YearContainer
        )
}
/*************************************************** Number Of Months Value *****************************************************************************/
const NumberOfMonthsValue = () => { 
    //this is for the months in a year 
    const NumberOfMonths = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const MonthContainer = (
        [NumberOfMonths.map((month, index) => <option  key={index.id + createEventId()}  value={month}>{month}</option>)]
        )
    return(MonthContainer)
}
/*************************************************** Number Of Days Value *****************************************************************************/
const NumberOfDaysValue = () => { 
    //this is for the days in a Month 
    const NumberOfDays = ['01','02','03','04','05','06','07','08','09','10',
                        '11','12','13','14','15','16','17','18','19','20',
                        '21','22','23','24','25','26','27','28','29','30','31']
    const DayContainer = (
        [NumberOfDays.map((days,index ) => <option  key={index.id + createEventId()} value={days}>{days}</option>)]
        )
    return(DayContainer)
}
/*************************************************** Display Option *****************************************************************************/
const DisplayOption = () => {

    //this is for the days in a Month 
    const display_Option = ['list-item','block']
    const DisplayContainer = (
        [display_Option.map((Display,index ) => <option  key={index.id + createEventId()} value={Display}>{Display}</option>)]
        )
    return(DisplayContainer)
}
/*************************************************** Lang Option *****************************************************************************/
const LangOption = () => {

    //this is for the days in a Month 
    const Lang_Option = ['en','ar','chi','fi','fr','ja','ko','it','ru']
    const LangContainer = (
        [Lang_Option.map((Lang,index ) => <option  key={index.id + createEventId()} value={Lang}>{Lang}</option>)]
        )
    return(LangContainer)
}

export {HourValue, MinutsValue, TwelveHourSystemValue, 
        NumberOfYearsValue, NumberOfMonthsValue, NumberOfDaysValue, 
        DisplayOption, LangOption};
