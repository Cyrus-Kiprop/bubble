import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

const CardWrapper = styled.div`
  background-color: #161B22;
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
