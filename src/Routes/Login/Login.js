import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../UI/NavBar";
import LoginForm from "./LoginForm";
import Imag from "../../UI/Imag"; 
import API from "../../API/API";

const Login = (props) => {
  let history = useHistory()
  useEffect( () => {
    async function CheckingIsLoggedIn() {
      const isLoggedIn = await API.isLoggedIn(()=>{});
      if (isLoggedIn) {
        history.push("/");
      }
    }

    CheckingIsLoggedIn()
  } , []) 

  return (
    <div>
      <Nav 
        ColorChanged={props.colorchanged} 
        RecieveColor={props.Color} 
        CallingPage={"Signup"}
        showLoginButton={false}
        showSignUpButton={true}
        showLogOutButton={false}
        username={null}
        inNotes={true}
        inCalendar={true}
      />
      <Imag/>  
      <LoginForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Login;
