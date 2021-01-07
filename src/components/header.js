import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import DrawerElement from './Drawer/Drawer';

const Header = () => {
  const handleClick = (id) => scrollTo(id);
  return (
    <HeaderWrapper>
      <header>
        <div className="container-xm">
          <div className="text-logo">
            <Link to="/">
              <div className="logo-symbol">C</div>
              <div className="logo-text">
                Cyrus <span>Kiprop</span>
              </div>
            </Link>
          </div>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
          }
          <a className="menu-toggle mobile-visible">
            <DrawerElement />
          </a>
          <nav id="__navbar">
            <ul className="nav-links">
              <li>
                <button
                  type="button"
                  onClick={() => handleClick('#contacts')}
                  className="cta"
                >
                  Contacts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleClick('#projects')}
                  className="cta"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleClick('#about')}
                  activeClassName="active"
                  className="cta"
                >
                  About
                </button>
              </li>
              <li>
                <Link activeClassName="" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => handleClick('#contact')}
            className="hire-me cta"
          >
            Hire Me
          </button>
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: 0px 50px;
  transition: all 0.6s ease-in-out;

  .visible {
    display: block !important;
  }

  @media (max-width: 1150px) {
    padding: 1rem;
    header > .container-xm {
    }
  }

  @media (max-width: 992px) {
    padding: 0;
    header > .container-xm {
      margin: 0;
      padding: 10px 20px;
      z-index: 999;
      border-radius: 0;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
      background-color: #161b22;
    }

    .logo-symbol {
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 18px;
      margin-top: 0;
    }
  }

  @media (max-width: 900px) {
    .logo-symbol {
      height: 35px !important;
      width: 35px !important;
      margin-top: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hire-me {
      display: none;
    }
    nav {
      position: absolute;
      height: auto;
      min-height: 100vh;
      top: 3.45rem;
      right: 0;
      background-color: #222;
      width: 100%;
      max-width: 24rem;
      display: none;
    }

    nav > .nav-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow-x: hidden;
    }
  }

  .menu-toggle {
    font-size: 20px;
  }

  li,
  a,
  button {
    text-decoration: none;
    color: #f5f5f5;
  }
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cta {
    background-color: transparent;
  }
  .container-xm:nth-child(2) {
    justify-content: flex-end;
  }
  .container-xm:nth-child(2) .logo {
    margin-right: auto;
  }
  .container-xm:nth-child(2) .cta {
    margin-left: 3rem;
  }
  .container-xm:nth-child(3) .logo {
    order: 3;
    margin-left: auto;
  }
  .container-xm:nth-child(3) nav {
    order: 1;
  }
  .container-xm:nth-child(3) .cta {
    order: 2;
    margin-left: 2rem;
  }
  .container-xm:nth-child(3) .nav-links {
    flex-direction: row;
  }
  .container-xm:nth-child(4) {
    flex-direction: row-reverse;
  }
  .container-xm:nth-child(5) {
    flex-direction: row-reverse;
  }
  .container-xm:nth-child(5) .logo {
    margin-left: auto;
  }
  .container-xm:nth-child(5) .cta {
    margin-right: 3rem;
  }

  .container-xm {
    background-color: rgba(252, 252, 252, 0.178);
    position: relative;
    width: 100%;
    height: auto;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    border-radius: 40px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
    transition: all 0.6s ease-in-out;
  }

  .nav-links {
    display: flex;
    flex-direction: row-reverse;
    list-style: none;
    text-align: center;
  }
  .nav-links li {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
  }

  .active,
  .nav-links li button {
    transition: 0.3s;
    position: relative;
    outline: none;
    border: none;
  }
  .nav-links li button:hover {
    color: #ced6e0;
  }
  .active::before,
  .nav-links li button::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 0%;
    height: 4px;
    border-radius: 50px;
    background: #fff;
    box-shadow: 0 0 10px #fff;
    transition: 0.3s ease;
  }

  .active::before {
    width: 100%;
  }
  .nav-links li button:hover::before {
    width: 100%;
  }
  .cta {
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 50px;
    transition: 0.3s ease;
    font-weight: bold;
    color: #fff;
  }
  .cta:hover {
    color: #5f27cd;
  }
  .logo {
    font-size: 1.5em;
    transition: 0.3s;
    position: relative;
  }
  .logo:hover {
    color: #5f27cd;
  }

  .text-logo > a {
    display: flex;
    align-items: center;
  }

  .logo-symbol {
    width: 44px;
    height: 44px;
    line-height: 44px;
    background-color: #007ced;
    border-radius: 100px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    font-weight: 800;
    margin-right: 8px;
    margin-top: 4px;
  }

  .logo-text {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    font-size: 18px;
  }

  .logo-text > span {
    font-weight: 400;
  }

  .hire-me {
    border: 2px solid #fff;
    outline: none;
  }

  .hire-me:hover {
    background-color: #fff;
  }
`;
