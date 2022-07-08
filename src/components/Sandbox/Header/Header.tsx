import React from 'react'
import styled from 'styled-components'
export default function Header() {
  return (
    <StyledHeader>
      <span>NS-TYPING</span>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #007acc;

  span {
    display: inline-block; /* 比率を変えるため */
    font-family: impact, sans-serif;
    font-size: 50px;
    color: #fff;
    text-shadow: 1px 2px #000;
    transform: scale(2, 1); /* 比率: 横, 縦 */
  }
`;