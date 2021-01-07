import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

import SlideContent from './SlideContent';

export default function Slides({ children }) {
  return (
    <SliderWrapper>
      <SlideContent>{children}</SlideContent>

      <Arrow />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;
