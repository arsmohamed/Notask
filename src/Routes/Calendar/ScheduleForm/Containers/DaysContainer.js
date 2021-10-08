import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in';  
// import MdRepeat from '@material-ui/icons/Repeat'; 
import RepeatDaySelected from '../../DataCollection/RepeatedDaysSelected';

import { MdRepeat } from "react-icons/md";

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const RDContainer = (props) => {

    const [GetNumberOfRD, ChangeGetNumberOfRD] = useState()
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"30px", 
        marginRight:"15px", 
        marginTop:"4px"
    }
    props.SubmitNumberOfRP(GetNumberOfRD)
    const RepeatedDays = (
      <InfoContainer>
        <FadeIn>
          <MdRepeat style={IconColor} />
        </FadeIn>
        <FadeIn>
          <RepeatDaySelected 
            ValueOfRepeatedDays={(value) => ChangeGetNumberOfRD(value)}
            RecievedColor={props.ScheduleColor}
          />
        </FadeIn>
      </InfoContainer>
    );

    return (RepeatedDays)
}

export default RDContainer;