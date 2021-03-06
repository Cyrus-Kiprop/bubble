import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export default function SlideContent() {
  return (
    <SliderWrapper id="slides-container">
      <Row>
        <div className=" col-12 col-md-6 testimonial-item testimonial-testimonials-5fdc48502728d">
          <div className="testimonial-content">
            <div className="testimonial-picture">
              <img
                src="https://avatars0.githubusercontent.com/u/19574754?s=460&u=fd3dd96518ebc398bd26ed314da9a920f661c0e5&v=4"
                alt="Alexis Sanchez"
              />
            </div>
            <div className="testimonial-text">
              <p>
                The ability of Kip to explain to you a subject can only compare
                to his willingness to share his knowledge and to show you how he
                truly cares about you feeling the “pair” in pair programming. I
                had a wonderful time working with him and I hope someday we can
                work together again.
              </p>
            </div>

            <div className="testimonial-author-info">
              <h5 className="testimonial-author"> Ermin</h5>
              <p className="testimonial-firm"> Appen </p>
            </div>

            <div className="testimonial-icon">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 123.961 123.961"
              >
                <g>
                  <path
                    d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
		C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
		H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                  />
                  <path
                    d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
		c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
		c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                  />
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </div>

            <div className="testimonial-icon-big">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
              >
                <g>
                  <g id="right_x5F_quote">
                    <g>
                      <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                      <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                    </g>
                  </g>
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </div>
          </div>
        </div>

        <div className=" col-12 col-md-6 testimonial-item testimonial-testimonials-5fdc48502728d">
          <div className="testimonial-content">
            <div className="testimonial-picture">
              <img
                src="https://avatars2.githubusercontent.com/u/29100993?s=400&u=ed9b751cbe5fc0f9eeeae46ffac2fd8ec469b5e4&v=4"
                alt="Billy Adams"
              />
            </div>
            <div className="testimonial-text">
              <p>
                Cyrus Kiprop has exceeded what is expected of a great Microverse
                alumni, collaborator, and developer. I am glad to say he excels
                in what he does and uses his knowledge specially in Rails,
                React, JS and Node. Without a doubt he is an great professional!
                and can work with anyone...
              </p>
            </div>

            <div className="testimonial-author-info">
              <h5 className="testimonial-author">Shubham Raj</h5>
              <p className="testimonial-firm"> GummerStack</p>
            </div>

            <div className="testimonial-icon">
              <i className="fa fa-quote-left" />
            </div>

            <div className="testimonial-icon-big">
              <i className="fa fa-quote-right" />
            </div>
          </div>
        </div>
      </Row>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  /* transform: translateX(-${(props) => props.translate}px); */
  /* transition: transform ease-out ${(props) => props.transition}s; */
  transition: 0.4s ease all; /* Chrome */
  /* transition: all ease-out 0.4s; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  .testimonial-item {
    min-width: 50%;
    width: 100%;
    padding: 30px;
  }

  .testimonial-item p,
  .testimonial-firm {
    font-style: italic;
  }

  .testimonial-author {
    margin: 0 0 2px;
    font-size: 0.9em;
    color: #e5e5e5;
    font-weight: 600;
  }

  .testimonial-firm {
    font-size: 14px;
    color: #d5d5d5;
    margin: 0;
    font-size: 0.8em;
    color: #bbb;
  }

  .testimonial-icon {
    color: #454545;
    display: block;
    line-height: 20px;
    font-size: 20px;
    position: absolute;
    left: 20px;
    bottom: 46px;

    height: 25px;
    width: 25px;
    fill: #454545;
  }

  .testimonial-icon-big > svg {
    fill: #454545;
  }

  .testimonial-icon-big {
    display: block;
    border: 1px solid red;
    line-height: 44px;
    font-size: 44px;
    position: absolute;
    right: -24px;
    bottom: -24px;
    z-index: -1;
    color: #353535;
  }

  .testimonial-content {
    background-color: #282828;
    background-color: #161b22;
    border-color: #444;
    position: relative;
    padding: 30px 20px 20px 60px;
    border-radius: 8px;
    border: 1px solid #30363d !important;
    transition: all 0.25s ease-in-out;
    height: 100%;
  }

  .testimonial-picture {
    position: absolute;
    display: block;
    top: -30px;
    left: -30px;
    width: 80px;
    height: 80px;
    z-index: 100;
  }

  .testimonial-picture img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  #samuel {
  }
`;
