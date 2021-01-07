import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Row({ children }) {
  return (
    <RowWrapper>
      <div className="container-fluid">
        <div className="row">{children}</div>
      </div>
    </RowWrapper>
  );
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const RowWrapper = styled.div`
  .row > div[class^='col'] {
    flex-grow: 1;
    flex-shrink: 1;
    transition: all 400ms ease;
  }
`;
