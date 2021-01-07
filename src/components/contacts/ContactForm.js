import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { message } from 'antd';

import PropTypes from 'prop-types';
import SectionTitle from '../shared/SectionTitle';
import Form from './Form';
import AntDForms from "./AntDForms";

ContactForm.propTypes = {

};

function ContactForm(props) {
  const [state, setState] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    message: '',
  });
  const [disable, setDisabled] = useState(false);
  const [errors, setErrors] = useState({
  });

  const fullNameRef = useRef(null);
  const emailAddressRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  // some validations

  const validate = () => {
    const elements = [emailAddressRef.current,
      fullNameRef.current,
      subjectRef.current,
      messageRef.current,
    ];
    let tempError = { };
    for (let i = 0; i < elements.length; i += 1) {
      const property = elements[i].name;
      if (state[elements[i].name] === '') {
        tempError = ({
          ...tempError,
          [property]: "Can't be blank",
        });
      }
    }
    return tempError;
  };
  const isValid = (errObj) => Object.values(errObj).every((err) => err === '');

  const handleClick = (event) => {
    event.preventDefault();
    const elements = [...document.getElementsByTagName('input'), document.getElementsByTagName('textarea')[0]];
    // eslint-disable-next-line no-param-reassign
    elements.forEach((input) => input.style.borderColor = '#bfbfbf');
    const { target } = event;
    target.style.borderColor = '#007ced';
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const key = 'updatable';

  const handleSubmit = (event) => {
    console.log('submitting');
    event.preventDefault();
    const templateId = 'lakefire';
    if (isValid(
      validate(),
    )) {
      // eslint-disable-next-line no-use-before-define
      sendFeedback(templateId, {
        message_html: state.message,
        subject: state.subject,
        from_name: state.fullName,
        reply_to: 'cyruskiprop254@gmail.com',
        from_email: state.emailAddress,
        to_name: 'Kiprop',
      });
    } else {
      popErrors();
    }
  };

  const popErrors = () => {
    const elements = [emailAddressRef.current,
      fullNameRef.current,
      subjectRef.current,
      messageRef.current,
    ];
    console.log(emailAddressRef.current.parentNode);
    const err = validate();
    elements.forEach((element) => {
      const { name, style } = element;
      if (err[name] !== '') {
        if (name === 'emailAddress') emailAddressRef.current.style.border = '2px solid red';
        if (name === 'fullName') fullNameRef.current.style.border = '2px solid red';
        if (name === 'subject') subjectRef.current.style.border = '2px solid red';
        if (name === 'message') messageRef.current.style.border = '2px solid red';
      } else {
        style.bordercolor = 'green';
      }
    });
  };

  const messageStatus = (content) => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content, key, duration: 2 });
    }, 1000);
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        'lakefire',
        'template_v3s8gqx',
        variables,
        'user_6d4qD668qOXeuT0IZqzRz',
      )
      .then((res) => {
        setDisabled(false);
        if (res.status === 200) messageStatus('Message sent!');
      })
      .catch(() => messageStatus('Error sending message!'));
  };

  return (
    <div className="col-xs-12 col-sm-8">
      <FormWrapper>
        <SectionTitle title="How can I Help You?" />
        {/* <Form */}
        {/*  handleClick={handleClick} */}
        {/*  handleChange={handleChange} */}
        {/*  state={state} */}
        {/*  inputRefs={ */}
        {/*    { */}
        {/*      emailAddressRef, */}
        {/*      messageRef, */}
        {/*      fullNameRef, */}
        {/*      subjectRef, */}
        {/*    } */}
        {/* } */}
        {/* /> */}

        <AntDForms/>
      </FormWrapper>
    </div>
  );
}

export default ContactForm;

const FormWrapper = styled.div`
width: 100%;

    .submit-btn{
        color: #fff;
        background-color: #333;
        box-shadow: 0 10px 10px -8px rgba(0,0,0,.78);
        display: inline-block;
        position: relative;
        padding: .8em 2.1em;
        margin-bottom: .75em;
        font-size: 1em;
        line-height: 1.2;
        outline: 0;
        border: 2px solid #007ced;
        border-radius: 30px;
        margin-top: 2rem;
        transition: all .3s ease-in;
    }
    .submit-btn:hover {
        background-color: #007ced;;
    }
    
`;
