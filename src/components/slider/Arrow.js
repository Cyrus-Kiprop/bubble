import React from 'react';
import styled from 'styled-components';

export default function Arrow({ direction, handleClick }) {
  return (
    <ArrowWrapper>
      <div className="owl-dot arrow-active">
        <span />
      </div>
      <div className="owl-dot">
        <span />
      </div>
      <div className="owl-dot">
        <span />
      </div>
    </ArrowWrapper>
  );
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
`;
