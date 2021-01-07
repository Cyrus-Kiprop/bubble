import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Section from '../page-elements/section';
import ContactInfo from './ContactInfo';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <Section>
      <ContactWrapper id="contacts">
        <Row>
          <ContactInfo />
          <ContactForm />
        </Row>
      </ContactWrapper>
    </Section>
  );
}

const ContactWrapper = styled.div`
margin-left: 15px;
margin-right: 15px;
`;
