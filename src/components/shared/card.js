import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const CardWrapper = styled.div`
  background-color: #161b22;
  border: 1px solid #444;
  position: relative;
  text-align: center;
  width: 100%;
  display: block;
  margin: 0 0 15px;
  padding: 25px 10px 15px;
  border-radius: 10px;
  box-shadow: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
  }
`;
