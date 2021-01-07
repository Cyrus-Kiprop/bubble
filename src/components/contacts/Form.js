import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function Form({
  handleChange, handleClick, state, inputRefs,
}) {
  const {
    emailAddressRef,
    messageRef,
    fullNameRef,
    subjectRef,
  } = inputRefs;

  const iconRef = useRef(null);

  return (
    <Wrapper>
      <div className="right-column form-text-input">
        <div className="input-item">
          <input
            ref={fullNameRef}
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            onClick={handleClick}
            name="fullName"
            value={state.fullName}
            className="form-control"
          />
          <FontAwesomeIcon icon={faExclamationCircle} className="error-class" />
        </div>

        <div className="input-item">
          <input
            type="text"
            placeholder="Email Address"
            name="emailAddress"
            onClick={handleClick}
            onChange={handleChange}
            value={state.emailAddress}
            ref={emailAddressRef}
            className="form-control"
          />
          <FontAwesomeIcon icon={faExclamationCircle} className="error-class" />
        </div>
        <div className="input-item">
          <input
            type="text"
            placeholder="Subject"
            onChange={handleChange}
            onClick={handleClick}
            name="subject"
            value={state.subject}
            ref={subjectRef}
            className="form-control"
            onFocusOut={(e) => {
              console.log('events out');
              e.preventDefault();
              e.target.style.border = 'red';
              iconRef.current.style.display = 'none';
            }}
          />
          <FontAwesomeIcon ref={iconRef} icon={faExclamationCircle} className="error-class" />
        </div>
      </div>

      <div className="left-column form-message-input">
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          value={state.message}
          name="message"
          id="form_message"
          className="form-control"
          ref={messageRef}
          placeholder="Message"
          rows="7"
        />
        <FontAwesomeIcon icon={faExclamationCircle} className="error-class" />
      </div>

    </Wrapper>
  );
}

export default Form;

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  state: PropTypes.oneOfType({
    fullName: PropTypes.string,
    message: PropTypes.string,
    emailAddress: PropTypes.string,
  }),
};

Form.defaultProps = {
  state: {
    fullName: '',
    message: '',
    emailAddress: '',
  },
};

const Wrapper = styled.form`
    display: flex;
    width: 100%;
    
    
    .input-item {
      position: relative;
    }
    
    .error-class {
    position: absolute;
      color: red;
      right: .5rem;
      top: .7rem;
    }
    
    
     .form-text-input {
        display: flex;
        flex-direction: column;
     } 
     
     .left-column {
        width: 47%;
        margin-right: 3%;
     }
     .right-column {
         width: 50%;
     }
    
     
     .form-text-input {
         margin-right: 3%;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
     }
     
     .form-control{
        font-weight: 400;
        color: #eee;
        outline: none;
        background-color: transparent;
        border-color: #555;
        transform: translateZ(0);
        height: 42px
        padding: 10px 25px 10px 12px;
        border: 2px solid #bfbfbf;
        position: relative;
        display: block;
        transition: all .3s ease-in-out,box-shadow .15s ease-in-out;
     }
     
       
       .form-control:hover {
        border: 2px solid #007ced;
       }
     
     .form-message-input {
        position: relative;
      }
    
     
   
     @media (max-width: 992px) {
     }
     
     @media (max-width: 992px) {
        
     }
     
`;
