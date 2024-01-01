import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Main>{children}</Main>
  </LayoutWrapper>
);

export default Layout;
