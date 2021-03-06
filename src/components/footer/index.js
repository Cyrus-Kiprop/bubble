import React from 'react';
import styled from 'styled-components';
import FooterSocial from './FooterSocial';
import Copyrights from './Copyrights';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterSocial />
      <p className="sign-off">Built with Gatsby · Hosted on Netflify · 💓 </p>
      <Copyrights />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  background-color: #21262d;
  border-color: #333333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px 45px;
  border-top: 2px solid #444;

  @media (min-width: 991px) {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
