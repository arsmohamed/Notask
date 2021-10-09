import React, {useState} from "react";
import styled from "styled-components";
import { MailOutlined, KeyOutlined, CheckOutlined, CloseOutlined, LoginOutlined} from "@ant-design/icons";
import UserInput from "../../UI/UserInput";
import NoteContainer from '../../UI/Modal';
import Button from "../../UI/Button";
import FadeIn  from "react-fade-in";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import API from "../../API/API";
import validator from "validator";

/*************************** Style Area ********************************/    
const InfoContainer = styled.div`
    width: 470px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
    `

const SignupForm = (props) => {
    /*************************** Style Area ********************************/    
    const IconColor = { 
        color : props.RecieveColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" }
    
    const ButtonIconColor = { 
        color : props.RecieveColor.IconC, 
        fontSize:"20px", 
        marginRight:"9px", 
        marginTop:"4px" } 
    const InValidStyle = {
        color : "red", 
        fontSize:"12px", 
        marginRight:"3px", 
        marginLeft:"37px"
    }
    const ValidStyle = {
        color : "Green", 
        fontSize:"12px", 
        marginRight:"3px", 
        marginLeft:"37px"
    }
    const [EmailValue, ChangeEmail] = useState("")
    const [EmailPHValue, ChangeEmailPH] = useState("E-mail")
    const [PasswordValue, ChangePassword] = useState("")
    const [PasswordPHValue, ChangePasswordPH] = useState("Password")
    
    /***********************************************************/    
    //For Validating 
    const[emailValidOrPassword, ChangeEmailValidOrPassword] = useState(false)
    const inCorrectInput = <InfoContainer>
        <CloseOutlined style={InValidStyle}/>
        <span style={{color: "red", marginLeft: "3px", textAlign: "center", fontSize: "12px", fontFamily: "Arial"}}>
            Either the Email or The Password you’ve entered is incorrect
        </span>
        </InfoContainer>
    
    /**************************** Email *******************************/    
    const[emailValid, ChangeemailValid] = useState(false)
    const[emailValidMessage, ChangeEmailValidemailValidMessage] = useState(false)
    var emailValidityString = emailValidMessage ? "Email is Valid!" : "Email is InValid!"
    const EmailValidation = <InfoContainer>
        {emailValidMessage ? <CheckOutlined style={ValidStyle}/> : <CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: emailValidMessage ? "Green" : "red", 
            textAlign: "center",  
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{emailValidityString}</span>
        </InfoContainer>
    const EmailValidateHandler = (v) => {
        ChangeemailValid(true) 
        ChangeEmail(v.target.value)
        const emailValid = validator.isEmail(v.target.value) 
        ChangeEmailValidemailValidMessage(emailValid) 
    }
    const Email = <InfoContainer>
            <FadeIn><MailOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            InputValue={EmailValue}
            onchangeValue={EmailValidateHandler}
            inputType={"text"}
            name="title"
            PlaceholderValue={EmailPHValue}
            widthValue={"380px"}
            paddingVale={"4px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            borderRadiusValue= {"7px"}
            backGroundColorValue={props.RecieveColor.UserInputBGC}
            FontColorValue={props.RecieveColor.UserInputFC}
            PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
            borderColorValue={props.RecieveColor.BorderColor}
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /></FadeIn>
        </InfoContainer>
    
    /**************************** PassWord *******************************/    
    const PassWord = <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            InputValue={PasswordValue}
            onchangeValue={(v)=>ChangePassword(v.target.value)}
            inputType={"password"}
            name="title"
            PlaceholderValue={PasswordPHValue}
            widthValue={"380px"}
            paddingVale={"4px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            borderRadiusValue= {"7px"}
            backGroundColorValue={props.RecieveColor.UserInputBGC}
            FontColorValue={props.RecieveColor.UserInputFC}
            PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
            borderColorValue={props.RecieveColor.BorderColor}
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /></FadeIn>
        </InfoContainer>

    let history = useHistory()
    const LoggingIn = () => {
        if(EmailValue == "" && PasswordValue == "") {
            ChangeEmailPH("Please Enter an Email. -_-")
            ChangePasswordPH("PLease Enter a Password. -_-")
        } else if (EmailValue == "" ) {
            ChangeEmailPH("Please Enter an Email. -_-")
        } else if(PasswordValue == "") {
            ChangePasswordPH("PLease Enter a Password. -_-")
        }else {
            console.log("object")
            API.login( 
                EmailValue, 
                PasswordValue,
                () => (history.push("/")),
                (e) => {
                    ChangeEmailValidOrPassword(true)
                }
            )
        }
    }   
   const LoginButton = <FadeIn>
            <Button
            width={"120px"}
            marginBottomValue={"10px"}
            marginLeftValue={"35%"}
            fontSizeValue={"20px"}
            borderRadiusValue={"15px"}
            backGroundColorValue={props.RecieveColor.LogSignColor}
            FontColorValue={props.RecieveColor.IconC}
            borderColorValue={props.RecieveColor.BorderColor}
            BorderValue="solid"
            borderWidthValue="thin"
            paddingInputValue="2px"
            onClick={LoggingIn}
            text = {"Login"} 
            icon = {<LoginOutlined style={ButtonIconColor}/>}
            />
        </FadeIn>
        
    /*********************** Login and Guest Area ************************************/  
    const ReturnToLogin =<FadeIn>
            <span style={{color: props.RecieveColor.UserInputFC , fontSize: "1.2em" }}>
            Create Account : 
                <Link to={"/signup"} style={{color : props.RecieveColor.IconC }}> SignUp</Link>
            </span>
        </FadeIn>

    const LoginAsGuest =  <FadeIn>
            <span style={{color: props.RecieveColor.UserInputFC , fontSize: "1.2em" }}>
                Login as a :  
                <Link to={"/Notes"} style={{color : props.RecieveColor.IconC }}> Guest</Link>
            </span>
        </FadeIn>

return <FadeIn>
        <NoteContainer
        position= {"relative"}
        width= {"470px"}
        margin= {"200px auto 20px auto"}
        padding= {"15px"}
        boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue= {"20px"}
        resizeValue={"both"}
        backGroundColorValue={props.RecieveColor.NotekBGC}
        >
            {Email}
            {emailValid ? EmailValidation : null}
            {PassWord}
            {emailValidOrPassword ? inCorrectInput : null}
            {LoginButton}
            <hr style={{marginBottom : "10px"}}></hr>
            {ReturnToLogin}
            {LoginAsGuest}
        </NoteContainer>
    </FadeIn> 
};

export default SignupForm; 