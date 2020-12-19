import React from "react"
import styled from "styled-components"
import Particle from "./particle"
import Row from "./shared/Row"

export default function HeroSection() {
  return (
    <HeroWrapper>
      <div className=" pos-content">
        <div className="hero-content">
          <Row>
            <div className="col-12 col-md-5">
              <div className="home-photo">
                <div className="hp-inner"></div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="welcome-content">
                <div className="proffession">
                  <h4 className="text-center">Front-end Engineer</h4>
                  {/* <h4>Back-end Engineer</h4> */}
                  {/* <h4>Full-stack Developer</h4> */}
                </div>
                <h1>Cyrus Kiprop</h1>
                <p>
                  Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                  convallis, risus non condimentum gravida, odio mauris
                  ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                  imperdiet lacinia urna, a placerat sapien pretium eu.
                </p>
                <div class="home-buttons">
                  <a
                    href="https://themeforest.net/item/leven-vcard-wordpress-theme/25289671"
                    target="_blank"
                    class="btn btn-primary btn-cv"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://lmpixels.com/wp/leven-wp/contact/"
                    target="_self"
                    class="btn btn-secondary btn-contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
      {/* <Particle></Particle> */}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  position: relative;

  @media (min-width: 768px) and (max-width: 992px) {
    .hero-content {
      margin-left: 0% !important;
      margin-right: 0% !important;
      margin-top: 0% !important;
      /* padding: 0 0 !important; */
      padding: 40px !important;
    }
    .welcome-content {
      padding-left: 4%;
    }
  }

  @media (max-width: 768px) {
    .welcome-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .welcome-content > h1 {
      font-size: 36px !important;
      text-align: center;
    }

    .home-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero-content {
      margin-left: 0% !important;
      margin-right: 0% !important;
      margin-top: 0% !important;
      padding: 40px !important;
    }
  }

  @media (min-width: 500px) and (max-width: 768px) {
    .home-photo {
      width: 60% !important;
      padding-bottom: calc(60% - 36px) !important;
      margin: 30px auto !important;
    }
  }

  @media (max-width: 500px) {
    .home-photo {
      width: 100% important;
      height: 100% important;
    }

    .welcome-content {
      padding-top: 2rem;
    }
  }

  .pos-content {
    right: 0;
    left: 0;
  }

  .hero-content {
    margin: 5% 10%;
    padding: 0 70px;
  }

  .home-photo {
    background-color: #444;
    border: 18px solid #444;
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: calc(100% - 36px);
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.8);
    border-radius: 1000px;
  }

  .hp-inner {
    background-image: url(../images/linked-in.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    display: block;
    position: absolute;
    width: auto;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background-image: url(//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/cesar-rincon-1024x1024.jpg);
    border-radius: 1500px;
  }

  .proffession > h4 {
    font-size: 16px;
    color: #aaa;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .welcome-content > h1 {
    font-size: 48px;
    line-height: 56px;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .welcome-content > p {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.75em;
    color: #d5d5d5;
  }
  .home-buttons {
    margin-top: 27px;
  }

  .home-buttons > .btn-cv,
  .home-buttons > .btn-contact {
    outline: none;
    text-decoration: none;
    color: #fff !important;
    background-color: #333 !important;
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78) !important;
    display: inline-block;
    position: relative;
    padding: 0.8em 2.1em;
    margin-bottom: 0.75em;
    margin-right: 0.25em;
    font-size: 1em;
    line-height: 1.2;
    outline: 0;
    border: 2px solid #7066ff;
    text-shadow: none;
    border-radius: 30px;
  }

  .home-buttons > .btn-contact {
    border-color: #d5d5d5;
  }
`
