import React from "react"
import styled from "styled-components"
import Animate from "../animation";



export default function SectionTitle({ title }) {
  return (

    <div
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="800"
        className=" col-xs-12 col-sm-12 ">
      <TitleWrapper>
        <div
          id=""
          className="fw-col-inner position-relative"
          data-paddings="0px 0px 0px 0px"
        >
          <div className="block-title position-relative">
            <h2 className="position-relative">{title} </h2>
          </div>
        </div>
      </TitleWrapper>
    </div>
  )
}

const TitleWrapper = styled.div`
  .block-title h2 {
    display: inline-block;
    position: relative;
    font-size: 21px;
    margin: 0 0 30px;
    z-index: 1;
    padding-bottom: 7px;
    color: #f5f5f5;
    font-weight: 600;
  }

  .block-title h2::before {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: 0;
  }

  .block-title h2::after {
    display: block;
    position: absolute;
    content: "";
    width: 30px;
    background-color: #007ced;
    height: 2px;
    bottom: 0;
  }
`
