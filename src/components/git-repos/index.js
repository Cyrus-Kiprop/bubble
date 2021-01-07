import React from 'react';
import styled from 'styled-components';
import { Wave } from 'react-animated-text';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DownloadOutlined } from '@ant-design/icons';

import Section from '../page-elements/section';
import CenterTitle from '../shared/CenterTitle';
import Row from '../shared/Row';
import Github from '../../images/github.png';
import Code from '../../images/code.png';

function Index() {
  const repos = [
    {
      name: 'Health App',
      repoLink: 'https://github.com/Cyrus-Kiprop/rails-react-health-app.git',
      shortDescription:
        'Health app curated using Rails apis and React-redux front-end. With the api endpoints, users can keep track of their fitness leves.',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
    {
      name: 'Private Events',
      repoLink: 'https://github.com/Cyrus-Kiprop/private-events.git',
      shortDescription:
        'A private Eventbrite-like an app which allows users to create events and then manage user signups. ',
      tags: ['Ruby', 'Rails', 'Devise', 'Capybara-rpec'],
    },
    {
      name: 'Tic Tac Toe',
      repoLink: 'https://github.com/Cyrus-Kiprop/Javascript-Tic-Tac-Toe.git',
      shortDescription:
        'A web based version of Tic-Tac-Toe game. the app was built using vanilla javascript and es6 features. ',
      tags: [
        'Game',
        'Javascript',
        'ES6+',
        'factory-functions',
        'OOP',
        'modules',
      ],
    },
    {
      name: 'Well-paid-geek-bot',
      repoLink: 'https://github.com/Cyrus-Kiprop/well-paid-geek-bot.git',
      shortDescription:
        'A slack bot Slack-Bot for the tech Savvy built using ruby. The bot was aimed at bringing efficiency to software developers in form of feeds. ',
      tags: ['Slack', 'Ruby', 'Testing', 'Rspec', 'Capybara'],
    },
    {
      name: 'Gatsby Styled components Starter pack',
      repoLink:
        'https://github.com/Cyrus-Kiprop/gatsby-styled-components-starter-pack.git',
      shortDescription:
        'A simple starter pack for gatsby js sites aiming to use styled-components ',
      tags: ['Gatsby', 'React/Redux', 'Styled-components', 'Javascript'],
    },
  ];
  return (
    <Section>
      <GitWrapper>
        <CenterTitle title="Git Repository" />
        <Row>
          {repos &&
            repos.map((repo) => (
              <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-0  ">
                <div className="service_single_item">
                  <div className="d-flex justify-content-between mb-3">
                    <img src={Github} alt="github" />
                    <img src={Code} alt="code" />
                  </div>
                  <a href={repo.repoLink} target="_blank" rel="noreferrer">
                    <h6 data-hover={repo}>{repo.name}</h6>
                  </a>
                  <p>{repo.shortDescription}</p>
                  <div className="d-flex justify-content-between repo-links">
                    <a href={repo.repoLink} target="_blank" rel="noreferrer">
                      <Button type="primary" icon={<DownloadOutlined />}>
                        Download
                      </Button>
                    </a>
                  </div>
                  <div className="langs">
                    {repo.tags.map((tag) => (
                      <Button type="primary" shape="round" size="small">
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </Row>

        <div className="view-all d-flex justify-content-center mt-5">
          <Button type="primary" size="large">
            <a
              href="https://github.com/Cyrus-Kiprop"
              target="_blank"
              rel="noreferrer"
              className="h-100 w-100 d-flex align-items-center"
            >
              <Wave text="View all Git" effect="stretch" effectChange="2" />
            </a>
          </Button>
        </div>
      </GitWrapper>
    </Section>
  );
}

export default Index;

const GitWrapper = styled.div`
  .repo-links .ant-btn {
    background: transparent;
    cursor: pointer;
    border-color: #d5d5d5;
    border-color: #30363d;
    margin-top: 1rem;
    min-width: 7rem;
    color: white;
  }

  .ant-btn:hover {
    border-color: #1890ff !important;
    color: #1890ff;
  }

  .langs {
    margin-top: 1rem;
  }

  .langs > .ant-btn {
    margin: 0 0.225rem 0.333em 0;
    color: #58a6ff;
    background: rgba(56, 126, 253, 0.1);
    border-radius: 2em;
    border: 1px solid transparent;
    font-size: 12px;
    font-weight: 500;
  }

  .anticon svg {
    color: #1890ff !important;
  }
  .service_single_item {
    background-color: #333;
    border: 2px solid #444;
    padding: 35px 20px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border: 1px solid #222;
    margin-top: 30px;
    border: 1px solid #0d1117;
    border: 1px solid #30363d !important;
    border-radius: 10px;
    background-color: #161b22;
    height: 100%;
    max-height: 421px;
  }

  .service_single_item p {
    color: #ccc;
    font-size: 15px;
    background-color: #161b22;
  }

  .repo-download {
    order: 1px solid #222;
    padding: 5px;
    margin-top: 20px;
    color: white;
  }

  .view-all > .ant-btn {
    text-transform: uppercase;
    padding: 1.8rem 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #58a6ff;
    background: rgba(56, 126, 253, 0.1);
  }
`;
