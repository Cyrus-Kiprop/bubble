import React from "react"
import Section from "../page-elements/section"
import Card from "../shared/card"
import Row from "../shared/Row"
import styled from "styled-components"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionTitle from "../shared/SectionTitle"

export default function FunFacts() {
  return (
    <Section>
      <FunFactWrapper>
        <Row>
          <SectionTitle title="Fun Facts" />
          <div className="col-12 col-sm-6 col-md-3">
            <Card>
              <div className="lm-info-block gray-default">
                <FontAwesomeIcon icon={faHeart} size="2x" />
                <h4>Happy Clients</h4>
                <span className="lm-info-block-value">578</span>
                <span className="lm-info-block-text"></span>
              </div>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Card>
              <div className="lm-info-block gray-default">
                <i className="linecons linecons-heart"></i>
                <h4>Happy Clients</h4>
                <span className="lm-info-block-value">578</span>
                <span className="lm-info-block-text"></span>
              </div>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Card>
              <div className="lm-info-block gray-default">
                <i className="linecons linecons-heart"></i>
                <h4>Happy Clients</h4>
                <span className="lm-info-block-value">578</span>
                <span className="lm-info-block-text"></span>
              </div>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Card>
              <div className="lm-info-block gray-default">
                <i className="linecons linecons-heart"></i>
                <h4>Happy Clients</h4>
                <span className="lm-info-block-value">578</span>
                <span className="lm-info-block-text"></span>
              </div>
            </Card>
          </div>
        </Row>
      </FunFactWrapper>
    </Section>
  )
}
const FunFactWrapper = styled.div`
  .lm-info-block h4 {
    font-size: 16px;
    margin: 15px;
    font-weight: 600px;
  }

  .lm-info-block-value {
    color: #d5d5d5;
    font-size: 48px;
    line-height: 52px;
    display: block;
    margin: 15px 0 10px;
  }

  .lm-info-block > svg {
    color: #007ced;
  }
`
