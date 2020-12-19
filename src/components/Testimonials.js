import React from "react"
import styled from "styled-components"

import Section from "./page-elements/section"
import Row from "./shared/Row"
import SectionTitle from "./shared/SectionTitle"

export default function Testimonials() {
  return (
    <Section>
      <Row>
        <SectionTitle title="Testimonials" />
        <div class="testimonial-item testimonial-testimonials-5fdc48502728d">
          <div class="testimonial-content">
            <div class="testimonial-picture">
              <img
                src="//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-1.jpg"
                alt="Billy Adams"
              />
            </div>
            <div class="testimonial-text">
              <p>
                Donec eu est vel metus consequat volutpat. Nunc aliquet euismod
                mauris, a feugiat urna ullamcorper non.
              </p>
            </div>

            <div class="testimonial-author-info">
              <h5 class="testimonial-author">Billy Adams</h5>
              <p class="testimonial-firm">Rolling Thunder</p>
            </div>

            <div class="testimonial-icon">
              <i class="fa fa-quote-left"></i>
            </div>

            <div class="testimonial-icon-big">
              <i class="fa fa-quote-right"></i>
            </div>
          </div>
        </div>
      </Row>
    </Section>
  )
}
