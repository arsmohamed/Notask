import React, { Component } from 'react';
import styled from "styled-components";

import Button from "./UI/NavBar";

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return ( 
      <Button
      allingPage={"Signup"}
        showLoginButton={false}
        showSignUpButton={true}
        showLogOutButton={false}
        username={null}
        inNotes={true}
        inCalendar={true}/>  
    )
      }
}

export default App;