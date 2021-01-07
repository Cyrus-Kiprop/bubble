import React from 'react';
import styled from 'styled-components';

function Copyrights(props) {
  return (
    <CopyrightWrapper>
      <p>
        © {new Date().getFullYear()} All rights reserved
        <span>Kiprop</span>.
      </p>
    </CopyrightWrapper>
  );
}

export default Copyrights;

const CopyrightWrapper = styled.div`
  p {
    font-weight: 400;
    line-height: 21px;
    font-size: 13px;
    margin: 0;
    color: #dddddd;
  }
  p > span {
    font-style: italic;
  }
`;
