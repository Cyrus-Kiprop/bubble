import React from "react"
import styled from "styled-components"

export default function Section({ children }) {
  return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.section`
  padding: 52px 40px 60px;
`
