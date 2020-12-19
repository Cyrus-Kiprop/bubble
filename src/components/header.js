import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const navbarToggle = () => {
    console.log("dont touch this")
    const nav = document.getElementById("__navbar")
    nav.classList.toggle("visible")
  }
  return (
    <HeaderWrapper>
      <header>
        <div class="container-xm">
          <div class="text-logo">
            <Link to="/">
              <div class="logo-symbol">C</div>
              <div class="logo-text">
                Cyrus <span>Kiprop</span>
              </div>
            </Link>
          </div>
          <a
            onClick={navbarToggle}
            class="menu-toggle mobile-visible d-block d-md-none"
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
          <nav id="__navbar">
            <ul class="nav-links">
              <li>
                <Link activeClassName="cta" to="/Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link activeClassName="cta" to="/articles">
                  Articles
                </Link>
              </li>
              <li>
                <Link activeClassName="cta" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link activeClassName="cta" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
          <a class="hire-me cta" href="#">
            Hire Me
          </a>
        </div>
      </header>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.div`
  padding: 0px 50px;
  transition: all 0.6s ease-in-out;

  .visible {
    display: block !important;
  }

  @media (max-width: 992px) {
    padding: 0;
    header > .container-xm {
      background-color: #222;
      margin: 0;
      padding: 10px 20px;
      z-index: 999;
      border-radius: 0;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
    }

    .logo-symbol {
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 18px;
      margin-top: 0;
    }
  }

  @media (max-width: 768px) {
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
    padding: 0.5rem 5rem;
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
  }

  .nav-links li a {
    transition: 0.3s;
    position: relative;
  }
  .nav-links li a:hover {
    color: #ced6e0;
  }
  .nav-links li a::before {
    content: "";
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
  .nav-links li a:hover::before {
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
    background-color: #fff;
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
`
