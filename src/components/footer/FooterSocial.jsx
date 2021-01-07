import React from 'react';
import styled from 'styled-components';
import { Twitter } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function FooterSocial() {
  return (
    <SocialWrapper>
      <ul className="footer-social-links">
        <li>
          <a
            href="https://twitter.com/kipropJS"
            rel="noreferrer"
            target="_blank"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kiprop-kemboi/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Cyrus-Kiprop"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </SocialWrapper>
  );
}

const SocialWrapper = styled.div`
  ul {
    display: flex;
    list-style: none;
  }

  ul > li {
    display: inline-block;
    margin-right: 25px;
  }

  ul > li > a {
    text-decoration: none;
    line-height: 21px;
    font-size: 13px;
    opacity: 0.6;
    color: #dddddd;
    transition: color 0.3s ease-in;
  }

  ul > li > a:hover svg {
    color: #027ced;
  }
`;

export default FooterSocial;
