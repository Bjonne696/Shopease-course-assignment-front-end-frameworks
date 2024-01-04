import React from 'react';
import { FooterContainer } from '../styles/ContainerStyles';
import { FooterText } from '../styles/FooterStyles';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} My eCom Store Created by Bjørn-Tore</FooterText>
    </FooterContainer>
  );
};

export default Footer;
