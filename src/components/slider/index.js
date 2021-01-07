import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

import SlideContent from './SlideContent';

export default function Slides({ children }) {
  const getWidth = () => window.innerWidth;

  const [state] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { transition, translate } = state;

  return (
    <SliderWrapper>
      <SlideContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {children}
      </SlideContent>

      <Arrow />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;
