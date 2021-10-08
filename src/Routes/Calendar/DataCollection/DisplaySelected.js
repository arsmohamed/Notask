import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../UI/Select";
import { DisplayOption } from "./OptionsForm";

const DisplaySelection = (props) => {
  const [DisplayOptionInput, ChangeDisplayOptionInput] = useState("list-item");
  props.ValueOfDisplayOption(DisplayOptionInput)
  const handleDisplay = (e) => {
    ChangeDisplayOptionInput(e.target.value);
  };
  const Colors = (
    <FadeIn>
      <SelectData
        key={DisplayOptionInput.id + 1}
        inputType={"text"}
        name="title"
        widthValue={"160px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleDisplay}
        InputValue={DisplayOptionInput}
      >
        {<DisplayOption />}
      </SelectData>
    </FadeIn>
  );

  return [Colors];
};

export default DisplaySelection;
