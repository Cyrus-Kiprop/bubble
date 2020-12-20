import React from "react"
import styled from "styled-components"

import Section from "./page-elements/section"
import Row from "./shared/Row"
import SectionTitle from "./shared/SectionTitle"
import Slides from "./slider/index"

export default function Testimonials() {
  return (
    <Section>
      <Row>
        <SectionTitle title="Testimonials" />
        <div className="col-12">
          <Slides />
        </div>
      </Row>
    </Section>
  )
}
