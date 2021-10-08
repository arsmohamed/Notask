import React, { useState } from "react";
import styled from "styled-components";
import { 
    UserOutlined, 
    MailOutlined, 
    KeyOutlined, 
    LoginOutlined, 
    CheckOutlined, 
    CloseOutlined, 
    UserAddOutlined, 
    HomeOutlined} 
from "@ant-design/icons";
import UserInput from "../../UI/UserInput";
import NoteContainer from '../../UI/Modal';
import Button from "../../UI/Button";
import FadeIn  from "react-fade-in";
import validator from "validator";
import { Link } from "react-router-dom";
// import API from "../../API/API";
// import { useHistory } from "react-router-dom";
import passwordValidator from "password-validator";

const InfoContainer = styled.div`
    width: 470px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
` 
    /******************************* Validator ****************************/    
    var passwordLength = new passwordValidator();
    passwordLength.is().min(8);
    
    var passwordMaxLength = new passwordValidator();
    passwordMaxLength.is().max(18);

    var passwordLetters = new passwordValidator();
    passwordLetters.has().lowercase();

    var passwordNumbers = new passwordValidator();
    passwordNumbers.has().digits();

    var passwordSymbols = new passwordValidator();
    passwordSymbols.has().symbols();

const SignupForm = (props) => {
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
    /*************************** Input Value ********************************/    
    const [FirstNameValue, ChangeFirstName] = useState("")
    const [LastNameValue, ChangeLastName] = useState("")
    const [UserNameValue, ChangeUserName] = useState("")
    const [EmailValue, ChangeEmail] = useState("")
    const [PassWordValue, ChangePassWord] = useState("")
    const [ConfirmPasswordValue, ChangeConfirmPassword] = useState("")
    const [CountryValue, ChangeCountry] = useState("")
    const [ProvinceValue, ChangeProvince] = useState("")
    const [CityValue, ChangeCity] = useState("")
    const [ZipCodeValue, ChangeZipCode] = useState("")

    /************************** For Validating *********************************/    
    const[emailValid, ChangeemailValid] = useState(false)
    const[PasswordValid, ChangePasswordValid] = useState(false)
    const[ConfirmPasswordValid, ChangeConfirmPasswordValid] = useState(false)
    
    /************************** For submission button *********************************/    
    const[FirstNameValid, ChangeFirstNameValid] = useState(false)
    const[LastNamrValid, ChangeLastNamrValid] = useState(false)
    const[usernameValid, ChangeusernameValid] = useState(false)
    const[PWPassValidation, ChangePWPassValidation] = useState(false)
    const[CPWPassValidation, ChangeCPWPassValidation] = useState(false)
    const[CountryValid, ChangeCountryValid] = useState(false)
    const[ProvinceValid, ChangeProvinceValid] = useState(false)
    const[CityValid, ChangeCityValid] = useState(false)
    const[ZipCodeValid, ChangeZipCodeValid] = useState(false)
    const[ValidSubmission, ChangeValidSubmission]= useState(false)

    /************************** First Name *********************************/  
    const FirstName = <FadeIn><UserInput 
            InputValue={FirstNameValue}
            onchangeValue={(v)=>(ChangeFirstName(v.target.value),ChangeFirstNameValid(true))}
            inputType={"text"}
            name="title"
            PlaceholderValue={"FirstName"}
            widthValue={"184px"}
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
    
    /************************** Last Name *********************************/  
    const LastName = <FadeIn><UserInput 
            InputValue={LastNameValue}
            onchangeValue={(v)=>(ChangeLastName(v.target.value),ChangeLastNamrValid(true))}
            inputType={"text"}
            name="title"
            PlaceholderValue={"LastName"}
            widthValue={"184px"}
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
   
    /************************** Personal Info *********************************/  
    const PersonalInfo = <InfoContainer>
            <FadeIn><UserOutlined style={IconColor}/></FadeIn>
            {FirstName}
            {LastName} 
        </InfoContainer>

    /************************** User Info *********************************/  
    const Username = <InfoContainer>
            <FadeIn><UserAddOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput
            InputValue={UserNameValue}
            onchangeValue={(v)=>(ChangeUserName(v.target.value), ChangeusernameValid(true))} 
            inputType={"text"}
            name="title"
            PlaceholderValue={"UserNamr"}
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

    /*********************** Email ************************************/    
    const[emailValidMessage, ChangeEmailValidemailValidMessage] = useState(false)
    var emailValidityString = emailValidMessage ? "Email is Valid!" : "Email is InValid!"
    const inCorrectInput = <InfoContainer>
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
            PlaceholderValue={"E-mail"}
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
    
    /*********************** PassWord ************************************/  
    const[ispasswordLen, ChangepasswordLen] = useState(false)
    var PassWordLengthMessage = ispasswordLen ? "Min. Length 8" : "Length Less then 8 "
    const passwordLen = <InfoContainer>
        {ispasswordLen ? <CheckOutlined style={ValidStyle}/> : <CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: ispasswordLen ? "Green" : "red", 
            textAlign: "center", 
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{PassWordLengthMessage}</span>
        </InfoContainer>
    const[ispasswordMaxLen, ChangepasswordMaxLen] = useState(true)
    var PassWordLengthMessage = ispasswordMaxLen ? "Max. Length 18" : "Please make the password 18 "
    const passwordMaxLen = <InfoContainer>
        {ispasswordMaxLen ? <CheckOutlined style={ValidStyle}/> : <CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: ispasswordMaxLen ? "Green" : "red", 
            textAlign: "center", 
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{PassWordLengthMessage}</span>
        </InfoContainer>
    const[ispasswordLetter, ChangepasswordLetter] = useState(false)
    var PassWordLetterMessage = ispasswordLetter ? "Password Contain one/more Letter" : "Please Include at least Letter"
    const passwordLetter = <InfoContainer>
        {ispasswordLetter ? <CheckOutlined style={ValidStyle}/> : <CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: ispasswordLetter ? "Green" : "red", 
            textAlign: "center", 
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{PassWordLetterMessage}</span>
        </InfoContainer>
    const[ispasswordNumber, ChangepasswordNumber] = useState(false)
    var PassWordNumberMessage = ispasswordNumber ? "Password Contain a Least one Number" : "Please Include one/more Numbers"
    const passwordNumber = <InfoContainer>
        {ispasswordNumber ? <CheckOutlined style={ValidStyle}/> : <CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: ispasswordNumber ? "Green" : "red", 
            textAlign: "center", 
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{PassWordNumberMessage}</span>
        </InfoContainer>
    const PasswordHandler = (v) => {
        ChangePasswordValid(true)
        ChangePassWord(v.target.value)
        const PasswordValue = v.target.value
        ChangepasswordLen(passwordLength.validate(PasswordValue))
        ChangepasswordMaxLen(passwordMaxLength.validate(PasswordValue))
        ChangepasswordLetter(passwordLetters.validate(PasswordValue))
        ChangepasswordNumber(passwordNumbers.validate(PasswordValue))
        if(
            (ispasswordLen && ispasswordMaxLen && ispasswordLetter && ispasswordNumber) === true
        ) {
            ChangePWPassValidation(true)
        }
    }  
    const PassWord = <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            maxLength={"18"}
            InputValue={PassWordValue}
            onchangeValue={PasswordHandler} 
            inputType={"password"}
            name="title"
            PlaceholderValue={"Password"}
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

    /*********************** Confirm PassWord ************************************/  
    const[passwordSpecial, ChangepasswordSpecial] = useState(false)
    var ConfirmPassWordValue = passwordSpecial ? "Password matched" : "Please match the password"
    const isConfirmPassword = <InfoContainer>
        {passwordSpecial ? <CheckOutlined style={ValidStyle}/> : <CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: passwordSpecial ? "Green" : "red", 
            textAlign: "center",  
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{ConfirmPassWordValue}</span>
        </InfoContainer>
    const ConfirmPasswordhandler = (v) => {
        ChangeConfirmPasswordValid(true)
        ChangeConfirmPassword(v.target.value)
        if (v.target.value === PassWordValue) {
            ChangepasswordSpecial(true)
            ChangeCPWPassValidation(true)
        }
    }
    const ConfirmPassWord = <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            InputValue={ConfirmPasswordValue}
            onchangeValue={ConfirmPasswordhandler} 
            inputType={"password"}
            name="title"
            PlaceholderValue={"Confirm PassWord"}
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

    /*********************** Country  ************************************/  
    const Country =<FadeIn><UserInput 
        InputValue={CountryValue}
        onchangeValue={(v)=>(ChangeCountry(v.target.value),ChangeCountryValid(true))} 
        inputType={"text"}
        name="title"
        PlaceholderValue={"Country"}
        widthValue={"184px"}
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

    /*********************** Province ************************************/  
    const Province = <FadeIn><UserInput 
        InputValue={ProvinceValue}
        onchangeValue={(v)=>(ChangeProvince(v.target.value),ChangeProvinceValid(true))} 
        inputType={"text"}
        name="title"
        PlaceholderValue={"Province"}
        widthValue={"184px"}
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

    /*********************** City ************************************/  
    const City = <FadeIn><UserInput 
        InputValue={CityValue}
        onchangeValue={(v)=>(ChangeCity(v.target.value),ChangeCityValid(true))} 
        inputType={"text"}
        name="title"
        PlaceholderValue={"City"}
        widthValue={"184px"}
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
        marginTopValue={"10px"}
        marginLeftValue={"34px"}
    /></FadeIn>

    /*********************** ZipCode ************************************/  
    const ZipCode = <FadeIn><UserInput 
        InputValue={ZipCodeValue}
        onchangeValue={(v)=>(ChangeZipCode(v.target.value),ChangeZipCodeValid(true))} 
        inputType={"text"}
        name="title"
        PlaceholderValue={"ZipCode"}
        widthValue={"184px"}
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
        marginTopValue={"10px"}
        marginRightValue={"10px"}
    /></FadeIn>

    /*********************** location ************************************/  
    const Location = <InfoContainer>
        <FadeIn><HomeOutlined style={IconColor}/></FadeIn>
        {Country}
        {Province}
        {City}
        {ZipCode}
    </InfoContainer>

    /*********************** On handler Click ************************************/  
    const [BEError, ChangeBEError]= useState(false)
    const backEndError = "Email is already been used before !"
    const TheBEMessage = <InfoContainer>
        {<CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: "red", 
            textAlign: "center", 
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{backEndError}</span>
        </InfoContainer>
    var SubmissionMessage = "Please Fill the Empty Fields"
    const SubmitInValid = <InfoContainer>
        {<CloseOutlined style={InValidStyle}/>}
        <span style={{
            color: "red", 
            textAlign: "center", 
            fontSize: "12px",
            fontFamily: "Arial"
        }}
        >{SubmissionMessage}</span>
        </InfoContainer>
    // let history = useHistory()
    const SignUp = () => {
        if(PassWordValue !== ConfirmPasswordValue) {
            return (ChangepasswordSpecial(false), ChangeCPWPassValidation(false))
        }
        else if (
            !FirstNameValid || !LastNamrValid || !usernameValid || !PWPassValidation || !CPWPassValidation ||
            !CountryValid || !ProvinceValid || !CityValid || !ZipCodeValid
        ){
            return ChangeValidSubmission(true)
        }
        // API.singUp(
        //     FirstNameValue,
        //     LastNameValue,
        //     UserNameValue,
        //     EmailValue,
        //     PassWordValue,
        //     CountryValue,
        //     ProvinceValue,
        //     CityValue,
        //     ZipCodeValue,
        //     ()=> history.push("/"),
        //     (err) => {
        //         if (err) {
                    console.log("err")
                    // console.log(err)
        //             ChangeBEError(true)
        //         }
        //     }
        // )
    }

    /*********************** Submission Button ************************************/  
    const SignupButton = <FadeIn>
        <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginTopValue={"5px"}
        marginLeftValue={"40%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        backGroundColorValue={props.RecieveColor.LogSignColor}
        FontColorValue={props.RecieveColor.IconC}
        borderColorValue={props.RecieveColor.BorderColor}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="3px"
        text = {"SignUp"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        onClick={SignUp}
        />
    </FadeIn>

const ReturnToLogin =<FadeIn>
        <span style={{color: props.RecieveColor.UserInputFC , fontSize: "1.2em" }}>
            Already have an acount ?  
            <Link to={"/login"} style={{color : props.RecieveColor.IconC }}> Login</Link>
        </span>
    </FadeIn>

return (
    <FadeIn>
        <NoteContainer
        position={"relative"}
        width={"480px"}
        heightValue={"420px"}
        overflow={"auto"}
        margin={"80px auto auto auto"}
        padding={"15px"}
        boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue={"20px"}
        resizeValue={"both"}
        backGroundColorValue={props.RecieveColor.NotekBGC}
        >
        {PersonalInfo}
        {Username}
        {Email}
        {emailValid ? inCorrectInput : null}
        {PassWord}
        {PasswordValid ? passwordLen : null}
        {PasswordValid ? passwordMaxLen : null}
        {PasswordValid ? passwordLetter : null}
        {PasswordValid ? passwordNumber : null}
        {ConfirmPassWord}
        {ConfirmPasswordValid ? isConfirmPassword : null}
        {Location}
        {ValidSubmission ? SubmitInValid : null}
        {BEError ? TheBEMessage : null}
        {SignupButton}
        <hr style={{marginBottom : "10px"}}></hr>
        {ReturnToLogin}
        </NoteContainer>
    </FadeIn>
);
};

export default SignupForm; 