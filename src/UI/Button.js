import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  width: ${(props) => (props.widthInput ? props.widthInput : "auto")};
  height: ${(props) => (props.heightInput ? props.heightInput : null)};
  color: ${(props) => ( props.FontColorInput ? props.FontColorInput : "")};
  font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
  background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "none")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "none")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "none")};
  outline: none;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
  padding: ${(props) => (props.paddingInput ? props.paddingInput : "none" )};
  border: ${(props) => (props.borderInput ? props.borderInput : "none" )};
  border-radius: ${(props) => (props.borderRadiusInput ? props.borderRadiusInput : null)};
  border-color: ${(props) => (props.borderColorInput ? props.borderColorInput : "none")};
  border-width: ${(props) => (props.borderWidthInput ? props.borderWidthInput : "inherit")};
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
`;
const IconStuly= styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
`
const borderStyling = {
  border: "1px solid rgb(245,186,19, 0.382)",
  boxShadow: "0 0 2px 2px rgb(245,186,19, 0.382)",
}

const AppButton = (props) => (
  <StyledButton
    height={props.Height}
    widthInput={props.width}
    color={props.color}
    fontSizeInput={props.fontSizeValue}
    backgroundColor={props.backgroundColor}
    onClick={props.onClick}
    disabled={props.disabled}
    disabledColor={props.disabledColor}
    disabledBackgroundColor={props.disabledBackgroundColor}
    marginBottom={props.marginBottomValue}
    marginLeft={props.marginLeftValue}
    marginRight={props.marginRightValue}
    FontColorInput={props.FontColorValue}
    backGroundColorInput={props.backGroundColorValue}
    borderRadiusInput={props.borderRadiusValue}
    borderColorInput={props.borderColorValue}
    borderWidthInput={props.borderWidthValue}
    borderInput={props.BorderValue}
    PlaceHolderColorInput={props.PlaceHolderColorValue}
    IsCalled={props.IsCalledValue}
    paddingInput={props.paddingInputValue}
    marginTopInput={props.marginTopValue}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  >
    <IconStuly>
      {props.icon}
      {props.text}
    </IconStuly>
  </StyledButton>
);

export default AppButton;
