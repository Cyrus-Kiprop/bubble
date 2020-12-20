import React from "react"
import styled from "styled-components"

export default function Arrow({ direction, handleClick }) {
  const handleSlide = () => {
    const element = document.getElementById("samuel")
    const rect = element.getBoundingClientRect()
    console.log(rect)
    const slidesContainer = document.getElementById("slides-container")
    //   transform: translate3d(-2.7rem, 0, 1rem);
    // element.style.transform = `translate3d(-634px, 0, 0 )`
    for (let i = 0; i <= rect.x - 93; i++) {
      setTimeout(() => {
        slidesContainer.scrollLeft = i
      }, 200)
    }
  }

  return (
    <ArrowWrapper>
      <div class="owl-dot arrow-active">
        <span></span>
      </div>
      <div onClick={handleSlide} class="owl-dot">
        <span></span>
      </div>
      <div class="owl-dot">
        <span></span>
      </div>
    </ArrowWrapper>
  )
}

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .owl-dot {
    cursor: pointer;
    display: inline-block;
    user-select: none;
  }

  .owl-dot > span {
    display: block;
    border-radius: 3px;
    margin: 4px;
    height: 3px;
    width: 20px;
    transition: all 0.25s ease-in-out;
    background-color: #454545;
  }

  .arrow-active > span {
    width: 30px;
    background-color: #007ced;
  }

  .owl-dot > span:hover {
    transform: scale(1.1);
    background-color: #007ced;
  }
`
