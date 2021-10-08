import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../UI/Select";
import { LangOption } from "./OptionsForm";

const LangSelection = (props) => {
  const [langOptionInput, ChangelangOptionInput] = useState("en");
  const handlelang = (e) => {
    props.TheCalndarlang(e.target.value)
    ChangelangOptionInput(e.target.value);
  };
  const Colors = (
    <FadeIn>
      <SelectData
        key={langOptionInput.id + 1}
        inputType={"text"}
        name="title"
        widthValue={"56px"}
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
        paddingLeftValue={"7px"}
        marginRightValue={"9px"}
        marginTopValue={"15px"}
        onchangeValue={handlelang}
        InputValue={langOptionInput}
      >
        {<LangOption />}
      </SelectData>
    </FadeIn>
  );

  return [Colors];
};

export default LangSelection;
