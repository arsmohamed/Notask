import React from "react";
import styled from "styled-components";

const borderStyling = {
  border: "1px solid rgb(245,186,19, 0.393)",
  boxShadow: "0 0 2px 2px rgb(245,186,19, 0.393)",
}

const TextareaContainer = styled.textarea`
    display: flex;
    resize: ${(props) => (props.resizeInput ? props.resizeInput : "none")};
    width: ${(props) => (props.widthInput ? props.widthInput : "100%")};
    height: ${(props) => (props.heightInput ? props.heightInput : null)};
    border: ${(props) => (props.borderInput ? props.borderInput : "none" )};
    padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
    outline: ${(props) => (props.outlineInput ? props.outlineInput : null)};
    border-radius: ${(props) => (props.borderRadiusInput ? props.borderRadiusInput : null)};
    font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
    font-family: ${(props) => (props.fontFamilyInput ? props.fontFamilyInput : "none")};
    box-shadow: ${(props) => (props.boxShowInput ? props.boxShowInput : "none")}; 
    background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
    color: ${(props) => ( props.FontColorInput ? props.FontColorInput : "")};
    border-color: ${(props) => (props.borderColorInput ? props.borderColorInput : "none")};
    border-width: ${(props) => (props.borderWidthInput ? props.borderWidthInput : "inherit")};
    margin-right: ${(props) => (props.marginRightInput ? props.marginRightInput : "none")};
    margin-bottom: ${(props) => (props.marginBottomInput ? props.marginBottomInput : "none")};
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
export default function UserInput(props) {
  return (
      <TextareaContainer
        marginBottomInput={props.marginBottomValue}
        maxLength={props.maxLength}
        value={props.InputValue}
        placeholder={props.PlaceholderValue}
        onChange={props.onchangeValue}
        onClick={props.onClickValue}
        widthInput={props.widthValue}
        heightInput={props.heightValue}
        borderInput={props.BorderValue}
        paddingInput={props.paddingVale}
        outlineInput={props.outlineValue}
        fontSizeInput={props.fontSizeValue}
        fontFamilyInput={props.fontFamilyValue}
        resizeInput={props.resizeValue}
        name={props.name}
        rows={props.rows} 
        IsCalled={props.IsCalledValue}
        borderRadiusInput={props.borderRadiusValue}
        backGroundColorInput={props.backGroundColorValue}
        FontColorInput={props.FontColorValue}
        PlaceHolderColorInput={props.PlaceHolderColorValue}
        borderColorInput={props.borderColorValue}
        borderWidthInput={props.borderWidthValue}
        marginRightInput={props.marginRightValue}
      />
  );
}
