import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Form, Input } from "antd"

import { sendFeedback, messageStatus } from "./email"

AntDForms.propTypes = {}

function AntDForms(props) {
  const [content, setContent] = useState({
    emailAddress: "",
    subject: "",
    message: "",
    fullName: "",
  })

  const [sendStatus, setStatus] = useState("Send message")
  const [disabled, setDisable] = useState(false)

  const [errors, setErrors] = useState({
    fullName: ["", "Name is required."],
    subject: ["", "Subject is required."],
    emailAddress: ["", "Email is required."],
    message: ["", "Please, leave me a message."],
  })

  const handleInputClickErrors = event => {
    event.preventDefault()
    const { name } = event.target
    setErrors({
      ...errors,
      [name]: [content[name] ? "success" : "error", errors[name][1]],
    })
  }

  const handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target

    setErrors({
      ...errors,
      [name]: [content[name] ? "success" : "error", errors[name][1]],
    })

    setContent({
      ...content,
      [name]: value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setDisable(true)
    const templateId = "lakefire"
    const isValid = Object.values(content).every(field => field.length > 0)

    if (isValid) {
      setStatus("Sending...")
      sendFeedback(templateId, {
        message_html: content.message,
        subject: content.subject,
        from_name: content.fullName,
        reply_to: "cyruskiprop254@gmail.com",
        from_email: content.emailAddress,
        to_name: "Kiprop",
      })
        .then(res => {
          if (res.status === 200) {
            messageStatus("Message sent!")
            setStatus("Sent!")
            setTimeout(() => {
              setDisable(false)
              setStatus("Send message")
            }, 1000)
          }
        })
        .catch(() => messageStatus("Error sending message!"))
    } else {
      // check which fields are missing
      for (const property in content) {
        if (content.hasOwnProperty(property)) {
          if (content[property] === "") {
            setErrors({
              ...errors,
              [property]: ["error", errors[property][1]],
            })
          }
        }
      }
      messageStatus("Please check your input fields")
      setDisable(false)
      setStatus("Send message")
    }
  }

  return (
    <FormWrap>
      <Form>
        <div className="form-input-items">
          <div className="left-column form-text-input">
            <Form.Item
              hasFeedback
              validateStatus={errors.fullName[0]}
              onClick={handleInputClickErrors}
              help={errors.fullName[0] === "error" ? errors.fullName[1] : ""}
            >
              <Input
                placeholder="Full Name"
                value={content.fullName}
                onChange={handleChange}
                name="fullName"
                id="success"
              />
            </Form.Item>

            <Form.Item
              hasFeedback
              validateStatus={errors.emailAddress[0]}
              onClick={handleInputClickErrors}
              name="emailAddress"
              help={
                errors.emailAddress[0] === "error" ? errors.emailAddress[1] : ""
              }
            >
              <Input
                placeholder="Email"
                value={content.emailAddress}
                onChange={handleChange}
                name="emailAddress"
                id="success"
              />
            </Form.Item>

            <Form.Item
              hasFeedback
              validateStatus={errors.subject[0]}
              onClick={handleInputClickErrors}
              help={errors.subject[0] === "error" ? errors.subject[1] : ""}
            >
              <Input
                value={content.subject}
                onChange={handleChange}
                name="subject"
                placeholder="Subject"
                id="error2"
              />
            </Form.Item>
          </div>

          <div className="right-column form-text-input">
            <Form.Item
              hasFeedback
              validateStatus={errors.message[0]}
              onClick={handleInputClickErrors}
              help={errors.message[0] === "error" ? errors.message[1] : ""}
            >
              <Input.TextArea
                value={content.message}
                onChange={handleChange}
                name="message"
                placeholder="Please leave a message"
                autoSize={{ minRows: 7, maxRows: 10 }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={disabled}
            className="button btn-send disabled submit-btn"
            value="Send message"
          >
            {sendStatus}
          </button>
        </div>
      </Form>
    </FormWrap>
  )
}

export default AntDForms

const FormWrap = styled.div`
  .ant-form {
    display: flex;
    flex-direction: column;
  }

  .form-input-items {
    display: flex;
  }
  .ant-col {
    max-width: 100%;
  }

  .left-column {
    width: 47%;
    margin-right: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right-column {
    width: 50%;
    height: 100%;
  }

  .right-column > textarea {
    height: 100%;
  }

  .ant-input {
    font-weight: 400;
    color: #eee;
    outline: none;
    background-color: transparent !important;
    border-color: #555;
    border-width: 2px;
    transform: translateZ(0);
    transition: all 0.3s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: 5px;
    padding: 10px 25px 10px 12px;
    width: 100%;
    margin-top: 0;
    transition: all 0.3s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .submit-btn {
    color: #fff;
    background-color: #333;
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78);
    display: inline-block;
    position: relative;
    padding: 0.8em 2.1em;
    margin-bottom: 0.75em;
    font-size: 1em;
    line-height: 1.2;
    outline: 0;
    border: 2px solid #007ced;
    border-radius: 30px;
    margin-top: 2rem;
    transition: all 0.3s ease-in;
  }
  .submit-btn:hover {
    background-color: #007ced;
  }
`
