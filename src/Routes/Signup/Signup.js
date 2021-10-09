import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../UI/NavBar";
import SignupForm from "./SignupForm"; 
import Imag from "../../UI/Imag"; 
import API from "../../API/API";


const Signup = (props) => {
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
    <div style={{ height: "100%" }}>
      <div style={{ zIndex: "1" }}>
        <Imag />
      </div>
      <div style={{ zIndex: "2", position: "sticky" }}>
        <Nav
          ColorChanged={props.colorchanged}
          RecieveColor={props.Color}
          showLoginButton={true}
          showSignUpButton={false}
          showLogOutButton={false}
          CallingPage={"Signin"}
          username={null}
          inCalendar={true}
          inNotes={true}
        />
      </div>
      <div style={{ height: "90%", overflow: "scroll" }}>
        <SignupForm
          IsLocation={props.Location}
          ColorChanged={props.colorchanged}
          RecieveColor={props.Color}
        />
      </div>
    </div>
  );
};

export default Signup;
