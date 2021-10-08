import React from "react";
import styled from "styled-components"; 

 
const PosterStyle = styled.img` 
    // position: absolute; 
    box-shadow: 0 2px 5px #000;
    width: auto;
    height: auto;
    border-radius: 35px;
    object-fit: cover; 
    margin-right: 12px;
`;
const Imag = (props) => {
  return (
    <PosterStyle draggable={false} src={props.SRC} />
  );
};

export default Imag;
