import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import Section from './page-elements/section';
import Row from './shared/Row';
import SectionTitle from './shared/SectionTitle';
import Slides from './slider/index';

export default function Testimonials() {
  const [data, setData] = useState([
    {
      uid: uuidv4(),
      id: 1,
      content: [
        {
          testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
          author: 'Roby Williams',
          company: 'Finland Motors',
        },
        {
          testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
          author: 'Roby Williams',
          company: 'Rolly Nexus',
        },
      ],
    },
    {
      uid: uuidv4(),
      id: 2,
      content: [
        {
          testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
          author: 'Roby Williams',
          company: 'SoftBox Keline',
        },
        {
          testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
          author: 'Roby Williams',
          company: 'New Nexus',
        },
      ],
    },
  ]);

  return (
    <Section>
      <Row>
        <SectionTitle title="Testimonials" />
        <div className="col-12">
          <Slides />
        </div>
      </Row>
    </Section>
  );
}
