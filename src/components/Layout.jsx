import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutContainer } from '../styles/ContainerStyles';
import { Main } from '../styles/LayoutStyles';


const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </LayoutContainer>
);

export default Layout;
