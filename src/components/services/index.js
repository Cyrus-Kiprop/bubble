import React from 'react';
import styled from 'styled-components';

import Section from '../page-elements/section';
import SectionTitle from '../shared/SectionTitle';
import Row from '../shared/Row';
import WhatIDoItem from './WhatIDoItem';

const services = [
  {
    imgUrl: 'https://img.icons8.com/nolan/64/web-design.png',
    heading: 'web Development',
    body:
      'I’m a massive fan of the jamstack and in particular the progressive web app generator Gatsby. Right now I’m enjoying integrating that with as many things as possible, for example this site',
  },
  {
    imgUrl: 'https://img.icons8.com/nolan/64/api-settings.png',
    heading: 'API Design',
    body:
      'With Node/Express and Rails at my disposal, I have mastered the art of designing and building secure apis to be consumed by clients.',
  },
  {
    imgUrl: 'https://img.icons8.com/color/48/000000/database-restore.png',
    heading: 'Database Services',
    body:
      'Worried about data redundancy and anomalies, data security, and database optimzation? my experience in database design as aided me in designing optimized databases. I have an extensive knowledge in SQL and NoSQL DBs ',
  },
  {
    imgUrl: 'https://img.icons8.com/nolan/64/cloud-sync.png',
    heading: 'Cloud Services',
    body:
      'Dozens of companies are engaged directly or indirectly with cloud computing. With my passion in programming I work each and every day to facilitate the access of applications and data form any location worldwide and from any device with an internet connection.',
  },
];

function Index() {
  return (
    <Section>
      <ServiceWrapper id="about">
        <SectionTitle title="What I do" />
        <Row>
          {services &&
            services.map((item) => (
              <div className="col-12 col-md-6">
                <WhatIDoItem
                  heading={item.heading}
                  imgUrl={item.imgUrl}
                  body={item.body}
                />
              </div>
            ))}
        </Row>
      </ServiceWrapper>
    </Section>
  );
}

export default Index;

const ServiceWrapper = styled.div``;
