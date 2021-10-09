import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import Footer from '../../UI/Footer'
import CalendarCollection from "./CalendarCollection";
import API from "../../API/API";

const foreCast = require('../../WeatherApp/WeatherStack');
const GeoCode = require('../../WeatherApp/GeoCoding');

class CalendarList extends Component {
   //to get the notes from the DB if any
   async componentDidMount() {
      const isLoggedIn = await API.isLoggedIn(()=>{});
      if (isLoggedIn) { 
        await API.isLoggedIn((e)=>this.setState({
          UserName : e.data.userName,
          city : e.data.city,
          province: e.data.province,
          country: e.data.country,
          userLoggedIn: true
        }));
        GeoCode( this.state.city ,this.state.province ,this.state.country ,Callback =>{
          if(!Callback.latitude || !Callback.longitude){
              return console.log({error: 'please enter an address'})
          }
          foreCast(Callback.latitude , Callback.longitude , (error, foreCastData, WeatherIcon, Location)=>{ 
              this.setState({Weather : foreCastData, WeatherIcon: WeatherIcon, Location: Location}) 
          })
        })
      } 
      GeoCode( this.state.city ,this.state.province ,this.state.country ,Callback =>{
        if(!Callback.latitude || !Callback.longitude){
            return console.log({error: 'please enter an address'})
        }
        foreCast(Callback.latitude , Callback.longitude , (error, foreCastData, WeatherIcon, Location)=>{
            this.setState({Weather : foreCastData, WeatherIcon: WeatherIcon})
        })
      }) 
  }

  state = { 
    isLogOut: false,
    UserName: "Welcome Guest", 
    Lang: "en",
    userLoggedIn: false,
    city:"Toronto",
    province:"Ontario",
    country:"Canada",
    Weather: "",
    WeatherIcon: "",
    Location: ""
  };

  render() {
    return (
      <div>
        <div style={{ zIndex: "7", position: "sticky" }}>
          <Nav
            username={this.state.UserName}
            ColorChanged={this.props.colorchanged}
            RecieveColor={this.props.Color}
            isShowLogOutButton={(value) => this.setState({ isLogOut: value })}
            ShowLogOutButtonValue={this.state.isLogOut}
            showLogOutButton={true}
            inCalendar={false}
            inNotes={true}
            LangOption={(value) => this.setState({ Lang: value })}
            WeatherMessage={this.state.Weather}
            WeatherIcon={this.state.WeatherIcon}
            Route={"Calendar"} // this will help the navebar to know which route to show the weather 
          />
        </div>
        <CalendarCollection
          isLoggedIn={this.state.userLoggedIn}
          isLogOut={this.state.isLogOut}
          RecieveColor={this.props.Color}
          ReturnLang={this.state.Lang}
          Location={this.state.Location}
        />
        <Footer />
      </div>
    );
  }
}

export default CalendarList;
