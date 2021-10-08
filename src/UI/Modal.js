import React from "react";
import styled from "styled-components";

const borderStyling = {
    border: "1px solid rgb(245,186,19, 0.382)",
    boxShadow: "0 0 2px 2px rgb(245,186,19, 0.382)",
  }

const ModelContainer = styled.div`
    position: ${(props) => (props.positionInput ? props.positionInput : null)};
    background: ${(props) => (props.BackgroundInput ? props.BackgroundInput : "#fff")};
    width: ${(props) => (props.widthInput ? props.widthInput : "auto")};
    height: ${(props) => (props.heighthInput ? props.heightInput : "none")};
    margin: ${(props) => (props.marginInput ? props.marginInput : null)};
    padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
    box-shadow: ${(props) => (props.boxShadowInput ? props.boxShadowInput : null)};
    border-radius: ${(props) => (props.borderRadiusInput ? props.borderRadiusInput : null)};
    float: ${(props) => (props.floatInput ? props.floatInput : null)};
    display: ${(props) => (props.displayInput ? props.displayInput :null)};
    flex-direction: ${(props) => (props.flexDirectionInput ? props.flexDirectionInput : null)};
    resize: ${(props) => (props.resizeInput ? props.resizeInput : "none")};
    overflow: ${(props) => (props.overflow ? props.overflow : "nono")}
    flex-grow: ${(props) => (props.flexGrowInput ? props.flexGrowInput : "none")};
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "none")};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "none")};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "none")};
    background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
    color: ${(props) => ( props.FontColorInput ? props.FontColorInput : "")};
    &::placeholder{
        color: ${(props) => ( props.PlaceHolderColorInput ? props.PlaceHolderColorInput : "")};
    };
    &:hover { 
        ${(props) => (props.IsCalled === "HOVER" ? borderStyling : "none")};
    };
    &:focus { 
        ${(props) => (props.IsCalled === "FOCUS" ? borderStyling : "none")};
    };
    z-index: ${(props) => (props.Zindex ? props.Zindex : "")};
    transition: all 0.3s ease-out;
    transform: ${(props) => (props.transformInput ? props.transformInput : null)};
    opacity: ${(props) => (props.OpacityInput ? props.OpacityInput : null)};
    left: ${(props) => (props.LeftInput ? props.LeftInput : "auto")};
    top: ${(props) => (props.TopInput ? props.TopInput : "auto")};
    Right: ${(props) => (props.RightInput ? props.RightInput : "auto")};
`

export default function Model (props) {


    return(
        <ModelContainer
            positionInput={props.position}
            BackgroundInput={props.Background}
            widthInput={props.width}
            heightInput={props.heightValue}
            overflow={props.overflow}
            marginInput={props.margin}
            marginTop={props.marginTopValue}
            marginLeft={props.marginLeftValue}
            paddingInput={props.padding}
            floatInput={props.float}
            displayInput={props.display}
            resizeInput={props.resizeValue}
            boxShadowInput={props.boxShadowValue}
            borderRadiusInput={props.borderRadiusValue}
            flexDirectionInput={props.flexDirectionValue}
            flexGrowInput={props.flexGrowValue}
            marginBottom={props.marginBottomValue}
            backGroundColorInput={props.backGroundColorValue}
            FontColorInput={props.FontColorValue}
            PlaceHolderColorInput={props.PlaceHolderColorValue}
            OpacityInput={props.OpacityValue}
            transformInput={props.TransformValue}
            LeftInput={props.LeftValue}
            TopInput={props.TopValue}
            RightInput={props.RightValue}
            Zindex={props.ZindexValue}
        >
            {props.children}
        </ModelContainer>
    )
}