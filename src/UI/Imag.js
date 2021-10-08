import React from "react";
import styled from "styled-components";
import Sky from "../Img/sun.jpg"; 

 
const PosterStyle = styled.img` 
    filter: blur(5px);
    position: absolute;
    height: auto;
    box-shadow: 0 2px 5px #000;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover; 
`;
const Imag = (props) => {
  return (
    <PosterStyle draggable={false} src={Sky} />
  );
};

export default Imag;
