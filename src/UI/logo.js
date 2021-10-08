import React from "react";
import styled from "styled-components";
import NotaskLog from "../Img/Logo.1.png"

 
const PosterStyle = styled.img`  
    width: 100%;
    height: 100%; 
`;
const Imag = () => {
  return (
    <PosterStyle draggable={false} src={NotaskLog} />
  );
};

export default Imag;
