import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} My eCom Store Created by Bjørn-Tore</FooterText>
    </FooterContainer>
  );
};

export default Footer;


/*FooterContainer is a styled footer element that will stick to the bottom of the page.
FooterText is a styled paragraph for any text you want to include in the footer.
The Footer functional component returns the styled footer with some basic text, including the current year.*/