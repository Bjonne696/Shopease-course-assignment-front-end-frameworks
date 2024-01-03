import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding-bottom: 60px; // Adjust this value based on the footer's height
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
