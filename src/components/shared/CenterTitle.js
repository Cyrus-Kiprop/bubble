import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Animate from '../animation';

CenterTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function CenterTitle({ title, id }) {
  return (
    <Animate>
      <TitleWrapper>
        <div className="text-center" id={id}>
          <h2 className="section_title">{title}</h2>
        </div>
      </TitleWrapper>
    </Animate>
  );
}

export default CenterTitle;

const TitleWrapper = styled.div`
position: relative;
    .section_title {
        margin-bottom: 100px;
        font-size: 30px;
        position: relative;
    }
    
    .section_title::before, .section_title::after {
        position: absolute;
        content: "";
        width: 2px;
        margin-left: 6px;
        top: calc(100% + 25px);
        background: linear-gradient(180deg,rgb(112, 102, 255) 0%,rgba(0,123,255,0.05644255993412994) 100%);
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    
    .section_title::after {
        height: 30px;
        left: calc(50% + 6px);
    }
    .section_title::before {
        height: 15px;
        left: calc(50% + 12px);
    }


`;
