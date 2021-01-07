import React from 'react';
import styled from 'styled-components';
import { Wave } from 'react-animated-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { Link } from 'gatsby';
import { DownloadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import Section from '../page-elements/section';
import CenterTitle from '../shared/CenterTitle';
import Row from '../shared/Row';
import Github from '../../images/github.png';
import Code from '../../images/code.png';

Index.propTypes = {

};

function Index(props) {
  const repos = [
    {
      name: 'Health App',
      repoLink: '',
      shortDescription: '',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
    {
      name: 'Health App',
      repoLink: '',
      shortDescription: '',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
    {
      name: 'Health App',
      repoLink: '',
      shortDescription: '',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
    {
      name: 'Health App',
      repoLink: '',
      shortDescription: '',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
    {
      name: 'Health App',
      repoLink: '',
      shortDescription: '',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
    {
      name: 'Health App',
      repoLink: '',
      shortDescription: '',
      tags: ['Ruby', 'Ruby on Rails', 'Serializer', 'api'],
    },
  ];
  return (
    <Section>
      <GitWrapper>
        <CenterTitle title="Git Repository" />
        <Row>
          {
                repos && repos.map((repo) => (
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="service_single_item">
                      <div className="d-flex justify-content-between mb-3">
                        <img src={Github} alt="github" />
                        <img src={Code} alt="code" />
                      </div>
                      <a href="https://github.com/adeleyeayodeji/adeleyeayodeji" target="_blank" rel="noopener">
                        <h6 data-hover={repo}>{repo.name}</h6>
                      </a>
                      <p>Adeleye Ayodeji is a professional with a broad set..</p>
                      <div className="d-flex justify-content-between repo-links">
                        <Link to="https://github.com/adeleyeayodeji/adeleyeayodeji/archive/main.zip">
                          <Button type="primary" icon={<DownloadOutlined />}>
                            Download
                          </Button>
                        </Link>
                        <Link to="">
                          <Button type="dashed">Live</Button>
                        </Link>
                      </div>
                      <div className="langs">
                        {
                          repo.tags.map((tag) => (
                            <Button type="primary" shape="round" size="small">
                              {tag}
                            </Button>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ))
            }
        </Row>

        <div className="view-all d-flex justify-content-center mt-5">
          <Button type="primary" size="large">
            <a href="https://github.com/Cyrus-Kiprop" target="_blank" className="h-100 w-100 d-flex align-items-center">
              <Wave
                text="View all Git"
                effect="stretch"
                effectChange="2"
              />
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
    min-width:7rem; 
    color: white;
    // background-color: #0d1117;
}

.ant-btn:hover {
  border-color: #1890ff !important;
  color: #1890ff;
}

.langs {
margin-top: 1rem;
}

.langs > .ant-btn {
      margin: 0 .225rem .333em 0;
      color: #58a6ff;
      background: rgba(56, 126, 253,.1);
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
    text-transform : uppercase;
    padding: 1.8rem 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
        color: #58a6ff;
        background: rgba(56,126,253,.1);
    }
    
`;
