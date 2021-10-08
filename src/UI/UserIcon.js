import React from "react";
import styled from "styled-components"; 

const UserIconDiv = styled.div`
    width: 32px;
    height: 32px;
    margin: 10px;
    border-radius: 50%;
    background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledLetter = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => ( props.backGroundTextColorInput ? props.backGroundTextColorInput : "")};
  margin: 0;
  margin-bottom: 25%;
  margin-top: 13px;
`;

const UserIcon = (props) => {
  return (
    <UserIconDiv
        backGroundColorInput={props.OnChangedColor.UserIconColor} 
    >
      <StyledLetter
        backGroundTextColorInput={props.OnChangedColor.UserIconTextColor}
      >{props.username.charAt()}</StyledLetter>
    </UserIconDiv>
  );
};

export default UserIcon;
