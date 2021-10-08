import React, {useState, useEffect} from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'
import FadeIn from 'react-fade-in';
import UserIcon from "./UserIcon";
import {WiDayCloudy, WiDayCloudyHigh} from "react-icons/wi";
import { MdSpeakerNotes, MdNotes, MdCalendarToday, MdEditCalendar } from "react-icons/md";
import {
  LoginOutlined,
  LogoutOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
// import NotesIcon from '@material-ui/icons/Notes';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import EventAvailableIcon from '@material-ui/icons/EventAvailable';
// import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import { Link } from "react-router-dom";
import LogoNotask from "../UI/logo";
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";
// import API from "../API/API";
// import LangSelection from "../Routes/Calendar/DataCollection/LangSelection";
import Model from "../UI/Modal";
import Weather_Icon from "../UI/WeatherIcon";

/*************************************************** Style Area *****************************************************************************/
const StyledNavBar = styled(FadeIn)` 
    align-items: center; 
    justify-content: space-between;
    height: 50px;
    background-color: #f5ba13;
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    display: flex;
`; 
const DisplayedUsername = styled.span`
  align-items: center;
  transform: translate(0, 30%);
  color: ${(props) => ( props.TextColorInput ? props.TextColorInput : "")};
  margin-top: 1px;
`;
const RightNavBarItems = styled.div`
  margin-right: 4px;
  display: flex;
  width: 500px;
  justify-content: flex-end;
`;
const LeftNavBarItems = styled.div`
  display: flex;
  width: 50px;
  height:50px;
  justify-content: flex-start;
`;

const NavBar = (props) => {
  const [UserLogged, ChangeUserLogged] = useState(false)
  // useEffect( () => {
  //   async function CheckingIsLoggedIn() {
  //     const isLoggedIn = await API.isLoggedIn(()=>{});
  //     if (isLoggedIn) {
  //       return ChangeUserLogged(true)
  //     }
  //   }

  //   CheckingIsLoggedIn()
  // } , []) 

  /*************************************************** Style Area *****************************************************************************/
  const VisibilityStle1 = {
    marginTop: "10px",
    marginRight: "8px",
    fontSize: "28px",
    color: props.RecieveColor.NavIconColor
  };
  const DifferentRouteStyle = {
    marginTop: "10px",
    marginRight: "8px",
    fontSize: "32px",
    color: props.RecieveColor.NavIconColor
  }; 
  const IconsNavChange = {
    marginTop: "10px",
    marginRight: "4px",
    fontSize: "36px",
    color: props.RecieveColor.NavIconColor
  }; 
  const LogoutIconStyle = {
    marginTop: "15px",
    marginLeft: "8px",
    fontSize: "18px",
    color: props.RecieveColor.NavIconColor
  };  
  const LogOutStyle = {
    marginRight: "8px",
    fontSize: "22px",
    color: props.RecieveColor.NavIconColor,
  };

  /*************************************************** UserName And Avatar *****************************************************************************/
  const [isLoggedbutton, ChangeIsLogged] =useState(false)
  const HandleMouseLeaveLogging = () => {
    const FinishToggle = () => (ChangeIsLogged(false),props.isShowLogOutButton(false))
    const Timer = setTimeout(FinishToggle,2000) 
    return Timer;
  }
  let usernameAndAvatar = props.username ? 
    <div style={{ display: "flex", minWidth: "fit-content" }}>
      <UserIcon
        username={props.username}
        OnChangedColor={props.RecieveColor}
      />
      <DisplayedUsername TextColorInput={props.RecieveColor.UserIconTextColor}>
        <span style={{ fontWeight: "bold" }}>{props.username}</span>
      </DisplayedUsername>
      {props.showLogOutButton ? 
        (!props.ShowLogOutButtonValue ? 
          <DownCircleOutlined
            onClick={() => (props.isShowLogOutButton(true),ChangeIsLogged(true))}
            style={LogoutIconStyle}
          />
        : 
          <UpCircleOutlined
            onClick={() => (props.isShowLogOutButton(false), ChangeIsLogged(false))}
            onMouseLeave={HandleMouseLeaveLogging}
            style={LogoutIconStyle}
          />
      ): null}
    </div>
     : null;
  
    let buttonsList = [];
    if (props.showLoginButton)
      buttonsList.push({
        text: "Login",
        linkTo: "/login",
      });
    if (props.showSignUpButton)
      buttonsList.push({
        text: "Sing Up",
        linkTo: "/signup",
      });
    
  /*************************************************** if Logged in *****************************************************************************/
  // let history = useHistory() 
  // const handlingLoggingOut = async () => {
  //   await API.Logout()
  //   window.location.reload() 
  //   history.push("/")
  // } 
  // const handlingLoggingIn =  () => {
  //   history.push("/login")
  // } 
  /*************************************************** LogOut Button *****************************************************************************/
  const ButtonIsLogOut = isLoggedbutton ?
    <div
      style={{zIndex: "7",position: "absolute",display: "flex",justifyContent: "flex-end",right: "12px",top: "52px",}}> 
        {UserLogged ?
          <FadeIn>
            <Button
            onClick={handlingLoggingOut}
            position={"relative"}
            width={"140px"}
            padding={"15px"}
            boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
            borderRadiusValue={"20px"}
            fontSizeValue={"1.2em"}
            marginTopValue={"5%"}
            resizeValue={"both"}
            text={"Logout"}
            LeftValue={"70%"}
            backGroundColorValue={props.RecieveColor.ToggleButton}
            FontColorValue={props.RecieveColor.IconC}
            borderColorValue={props.RecieveColor.BorderColor}
            icon={<LogoutOutlined style={LogOutStyle} />}
            />
          </FadeIn> 
          :
          <FadeIn>
            <Button
            onClick={handlingLoggingIn}
            position={"relative"}
            width={"140px"}
            padding={"15px"}
            boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
            borderRadiusValue={"20px"}
            fontSizeValue={"1.2em"}
            marginTopValue={"5%"}
            resizeValue={"both"}
            text={"login"}
            LeftValue={"70%"}
            backGroundColorValue={props.RecieveColor.LogSignColor}
            FontColorValue={props.RecieveColor.IconC}
            borderColorValue={props.RecieveColor.BorderColor}
            icon={<LogoutOutlined style={LogOutStyle} />}
            /> 
          </FadeIn>
          } 
      </div> : null
  
  /*************************************************** change to calendar link *****************************************************************************/
  const [isCalendar, ChangeIsCalendar] = useState(false);
  const GoToCalendar = props.inCalendar ? 
    (isCalendar ? 
      (<MdCalendarToday onMouseEnter={() => ChangeIsCalendar(false)} style={DifferentRouteStyle} />)  
      : 
      (<Link to={"/calendar"}> 
        <MdEditCalendar  onMouseLeave={() => ChangeIsCalendar(true)} style={IconsNavChange} />
        </Link>)) 
    : <MdEditCalendar  style={IconsNavChange} />
    
  /*************************************************** change to Notes link *****************************************************************************/
  const [isNote, ChangeIsNote] = useState(true);
  const GoToNote = props.inNotes ? 
    (isNote ? 
      (<MdSpeakerNotes onMouseEnter={() => ChangeIsNote(false)} style={DifferentRouteStyle} />)  
      : 
      (<Link to={"/"} >
      <MdNotes   onMouseLeave={() => ChangeIsNote(true)} style={IconsNavChange} />
        </Link>)) 
    : <MdNotes style={IconsNavChange} />

  /*************************************************** change Link to Login *****************************************************************************/
  const GoToLogin =<Link to={props.CallingPage == "Signin" ? "/login" : "/signup"} >
    {props.CallingPage === "Signin" ?
        <LoginOutlined  style={VisibilityStle1} />
    :
        <LogoutOutlined style={VisibilityStle1} />
      }
    </Link>

  /*************************************************** lang Drop Down *****************************************************************************/
  const ButtonLangOption = props.inCalendar ? null : UserLogged ? <LangSelection
    RecievedColor={props.RecieveColor}
    TheCalndarlang={(value) =>props.LangOption(value)}
  /> : null

  /*************************************************** change The Color *****************************************************************************/
  const ColorSwitcher = UserLogged ? <div style={{marginRight : "4px"}}>
        <SwitchIcon OnChangedColor={props.ColorChanged} style={{marginRight : "4px"}}/>
      </div> : null

  /*************************************************** Weather  *****************************************************************************/
  const [isWeather, ChnageisWeather] = useState(true)
  const HandleMouseLeave = () => {
    const FinishToggle = () => (ChnageisWeather(true))
    return(setTimeout(FinishToggle,1000))
  }
  const IsWeather =UserLogged ? (isWeather ?
         <Button
            onClick={()=>ChnageisWeather(false)} 
            position={"relative"}
            width={"0px"}
            marginRightValue={"50px"}
            marginTopValue={"8px"}
            icon={<WiDayCloudyHigh color={props.RecieveColor.ToggleButton} size={"35px"} />}
            /> 
            :
            <Button
            onClick={()=>ChnageisWeather(true)}
            onMouseLeave={HandleMouseLeave}
            position={"relative"}
            width={"0px"}
            marginRightValue={"50px"}
            marginTopValue={"2px"}
            icon={<WiDayCloudy color={props.RecieveColor.ToggleButton} size={"42px"} />}
            />) : null 
            
  const WeatherButton = !isWeather ? (UserLogged ?<div
      style={{zIndex: "7",position: "absolute",display: "flex",justifyContent: "flex-end",right: "10%",top: "52px"}}>
        <Model
          display={"flex"}
          flexDirectionValue={"row"}
          position= {"relative"}
          width= {"305px"}
          margin= {"15px"}
          padding= {"10px"}
          boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
          borderRadiusValue= {"7px"}
          resizeValue={"both"}
          backGroundColorValue={props.RecieveColor.ToggleButton}
          FontColorValue={props.RecieveColor.IconC}
          borderColorValue={props.RecieveColor.BorderColor}
          icon={<LogoutOutlined style={LogOutStyle} />}
            >
              <Weather_Icon SRC={props.WeatherIcon}/>
              <div style={{marginTop: "10px"}}>{props.WeatherMessage}</div>
        </Model>
      </div>: null ): null

  /*************************************************** NavBar  *****************************************************************************/
  return (
    <StyledNavBar>
      <LeftNavBarItems>
          <LogoNotask/>
      </LeftNavBarItems>
      <RightNavBarItems>
        {WeatherButton}
        {IsWeather}
        {ButtonLangOption}
        {ColorSwitcher}
        {GoToCalendar}
        {GoToNote}
        {buttonsList.map((button) => {
          return (
            <div  style={{ display: "flex ", flexDirection: "row",  marginLeft: "6px",  }}  >
              {GoToLogin}
              <div style={{ color: props.RecieveColor.UserInputFC,  fontSize: "1.2em",  marginTop: "12px",  }}  >
                {button.text}
              </div>
            </div>
          );
        })}
        {usernameAndAvatar}
        {props.ShowLogOutButtonValue ? ButtonIsLogOut  : null}
      </RightNavBarItems>
    </StyledNavBar>
  ); 
}




export default NavBar;