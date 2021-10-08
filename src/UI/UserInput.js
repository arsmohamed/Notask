import React, { useState } from "react";
import styled from "styled-components";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
`
const borderStyling = {
  border: "1px solid rgb(245,186,19, 0.382)",
  boxShadow: "0 0 2px 2px rgb(245,186,19, 0.382)",
}

const InputContainer = styled.input`
  icon: ${<EyeOutlined/>};
  display: flex;
  resize: ${(props) => (props.resizeInput ? props.resizeInput : "none")};
  width: ${(props) => (props.widthInput ? props.widthInput : "100%")};
  height: ${(props) => (props.heightInput ? props.heightInput : null)};
  padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
  outline: ${(props) => (props.outlineInput ? props.outlineInput : null)};
  font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
  font-family: ${(props) => (props.fontFamilyInput ? props.fontFamilyInput : "none")};
  box-shadow: ${(props) => (props.boxShowInput ? props.boxShowInput : "none")}; 
  background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
  color: ${(props) => ( props.FontColorInput ? props.FontColorInput : "")};
  border: ${(props) => (props.borderInput ? props.borderInput : "none" )};
  border-radius: ${(props) => (props.borderRadiusInput ? props.borderRadiusInput : null)};
  border-color: ${(props) => (props.borderColorInput ? props.borderColorInput : "none")};
  border-width: ${(props) => (props.borderWidthInput ? props.borderWidthInput : "inherit")};
  margin-right: ${(props) => (props.marginRightInput ? props.marginRightInput : "none")};
  margin-left: ${(props) => (props.marginLeftInput ? props.marginLeftInput : "none")};
  margin-top: ${(props) => (props.marginTopInput ? props.marginTopInput : "none")};
  &::placeholder{
    color: ${(props) => ( props.PlaceHolderColorInput ? props.PlaceHolderColorInput : "")};
  };
  &:hover { 
    ${(props) => (props.IsCalled === "HOVER" ? borderStyling : "none")};
  };
  &:focus { 
    ${(props) => (props.IsCalled === "FOCUS" ? borderStyling : "none")};
  };
  /* &:hover {
    border: 1px solid rgb(245,186,19, 0.493);
    box-shadow: 0 0 2px 2px rgb(245,186,19, 0.493);
  } */
`
const passwordIconStyling = {
  color: "#f5ba13",
  fontSize: "22px",
  display: "flex",
};

export default function UserInput(props) {
  const [Password, ChangePassword] = useState(false);
  const toggleShowPassword = () => {ChangePassword(!Password)};
  const getInputPasswordIcon = () => {
    if(props.inputType === "password"){
      if(Password){
        return(
          <EyeOutlined
            style={passwordIconStyling}
            onClick={toggleShowPassword}
          />
        );
      }else{
        return(
          <EyeInvisibleOutlined
            style={passwordIconStyling}
            onClick={toggleShowPassword}
          />
        );
      }
    }
  }
  return (
    <Container>
      <InputContainer
        maxLength={props.maxLength}
        value={props.InputValue}
        type={Password ? "text" : props.inputType}
        placeholder={props.PlaceholderValue}
        onChange={props.onchangeValue}
        onClick={props.onClickValue}
        widthInput={props.widthValue}
        heightInput={props.heightValue}
        boxShowInput={props.boxShowValue}
        paddingInput={props.paddingVale}
        outlineInput={props.outlineValue}
        fontSizeInput={props.fontSizeValue}
        fontFamilyInput={props.fontFamilyValue}
        resizeInput={props.resizeValue}
        name={props.name}
        rows={props.rows} 
        IsCalled={props.IsCalledValue}
        backGroundColorInput={props.backGroundColorValue}
        FontColorInput={props.FontColorValue}
        PlaceHolderColorInput={props.PlaceHolderColorValue}
        borderInput={props.BorderValue}
        borderRadiusInput={props.borderRadiusValue}
        borderColorInput={props.borderColorValue}
        borderWidthInput={props.borderWidthValue}
        marginRightInput={props.marginRightValue}
        marginLeftInput={props.marginLeftValue}
        marginTopInput={props.marginTopValue}
        checked={props.checked}
      >
        
      </InputContainer>
      <div>{getInputPasswordIcon()}</div>
    </Container>
  );
}
