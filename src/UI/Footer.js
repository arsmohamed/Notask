import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
    position: absolute;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
`
const FooterInfo = styled.p`
    color: #ccc;
`


const currentYear = new Date().getFullYear();

const Footer = () => (
        <FooterContainer>
            <FooterInfo>
             Copyright ⓒ {currentYear}
            </FooterInfo>
        </FooterContainer>
)

export default Footer 