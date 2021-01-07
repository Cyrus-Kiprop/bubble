import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

ContactInfo.propTypes = {

};

function ContactInfo(props) {
  const info = [{
    icon: faPhone,
    heading: 'Phone',
    information: ['+254726158347', '+254726158347'],
  },
  {
    icon: faEnvelope,
    heading: 'Email',
    information: ['cyruskiprop254@gmail.com', 'kipmoneygram@gmail.com'],
  },
  {
    icon: faAddressBook,
    heading: 'Address',
    information: ['2117, Okore Rd.', 'Kisumu, Kenya'],
  },
  ];
  return (
    <div className=" col-xs-12 col-sm-4 " id="contact">
      <InfoWrapper>
        {
                info && info.map((item) => (
                  <div className="info-item">

                    <div className="info-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="details">
                      <h4>{item.heading}</h4>
                      {
                            item.information.map((detail) => (
                              <div className="d-flex dmx-content">
                                <p>{detail}</p>
                              </div>
                            ))
                        }
                    </div>
                  </div>
                ))
                }
      </InfoWrapper>
    </div>
  );
}

export default ContactInfo;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    
    .info-icon {
        width: 44px;
        padding: 0 10px 5px 0;
      margin: 0;
    padding: 0 10px 30px 0;
    }
    
    .info-icon > svg {
        color: #007ced;
        font-size: 33px;
    }
    
    
    
    .info-item {
        display: flex;
        align-item: center;
    }
    
    .details {
        display: flex;
        flex-direction: column;
        padding: 0 0 0 15px;
    }
    
    .details > h4 {
        margin: 7px 0;
        font-size: 16px;
    color: #f5f5f5;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    word-wrap: break-word;
    }
    .details > p {
      font-size: .92em;
      font-weight: 400;
      font-style: normal;
      line-height: 1.75em;
      color: #d5d5d5;
      margin: 0 0 10px;
      word-wrap: break-word !important;
      flex-wrap: nowrap;
      color: red;
    }
    
    .dmx-content > p{
      display:flex;
      word-break: break-all;
    }
    
    @media( max-width: 576px) {
      margin-bottom: 2rem;
    }
`;
