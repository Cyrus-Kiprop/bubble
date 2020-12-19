import React from "react"
import styled from "styled-components"

export default function Row({ children }) {
  return (
    <RowWrapper>
      <div className="container-fluid">
        <div className="row">{children}</div>
      </div>
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  .row > div[class^="col"] {
    flex-grow: 1;
    flex-shrink: 1;
    transition: all 400ms ease;
  }
`
