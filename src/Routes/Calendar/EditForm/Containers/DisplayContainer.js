import React, {useState} from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import {BgColorsOutlined} from "@ant-design/icons"; 
import DisplaySelected from '../../DataCollection/DisplaySelected';


const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const DisplayContainer = (props) => {
    
    const [GetDisplayOption, CHnageDisplayOption] = useState()
    props.SubmitDisplayOption(GetDisplayOption)
    const FontColor = <InfoContainer>
                <FadeIn>
                    <BgColorsOutlined style={{fontSize:"32px",color : props.ScheduleColor.IconC,marginRight:"9px",marginTop:"4px"}}/>
                </FadeIn>
                <FadeIn>
                    <DisplaySelected 
                        ValueOfDisplayOption={(value) => CHnageDisplayOption(value)}
                        RecievedColor={props.ScheduleColor}
                    />
                </FadeIn>
    </InfoContainer>

    return(FontColor)
}
export default DisplayContainer;