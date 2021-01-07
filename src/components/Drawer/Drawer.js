import React, { useState, useEffect } from 'react';
import { Drawer, Button, Radio, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import './drawer.css';

const DrawerElement = () => {
  const [state, setState] = useState({
    visible: false,
    placement: 'right',
  });

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleClick = (id) => {
    onClose();
    scrollTo(id);
  };

  const { placement, visible } = state;

  return (
    <Wrapper>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </Space>
      <Drawer
        title="Cyrus Kiprop"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
        className="drawer"
        headerStyle={{
          color: 'red',
        }}
      >
        <ContentDialog>
          <button onClick={() => handleClick('#contacts')} className="cta">
            Contacts
          </button>
          <button onClick={() => handleClick('#projects')} className="cta">
            Projects
          </button>
          <button
            onClick={() => handleClick('#about')}
            activeClassName="active"
            className="cta"
          >
            About
          </button>
          <Link activeClassName="" to="/">
            Home
          </Link>
        </ContentDialog>
      </Drawer>
    </Wrapper>
  );
};

export default DrawerElement;

const Wrapper = styled.div`
  .ant-btn {
    display: none;
  }

  @media (max-width: 900px) {
    .ant-btn {
      display: flex;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      outline: none;
      border: 2px solid #444;
      border-radius: 5px;
    }
  }
`;

const ContentDialog = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  button.cta,
  a {
    padding: 1.25rem 1rem;
    color: white;
    background: transparent;
    border: 0;
    border-top: 1px solid #30363d;
    display: flex;
    justify-content: center;
    text-decoration: none;
    outline: none;
  }

  button.cta:hover,
  a:hover {
    background-color: #20252b;
  }
`;
