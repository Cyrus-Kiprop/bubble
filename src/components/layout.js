import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';

import Header from './header';

const bounceAnimation = keyframes`${flipInY}`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <PageWrapper>
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </PageWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const PageWrapper = styled.div`
  background-color: #0479e6;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  z-index: 2;

  @media (max-width: 992px) {
    background-color: #21262d;
  }
`;
const MainWrapper = styled.div`
  transition: all 0.7s ease-in-out;
  border-radius: 40px;
  max-width: 94%;
  background-color: #0d1117;
  background-color: #21262d;
  margin: 3% auto;
  position: relative;
  animation: 1s ${bounceAnimation};
  @media (max-width: 992px) {
    max-width: 100%;
    border-radius: 0%;
    margin-top: 0%;
    margin-bottom: 0%;
  }
`;

export default Layout;
