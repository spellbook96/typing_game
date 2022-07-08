import React from 'react'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import ScreenFrame from './ScreenFrame'

export default function Sandbox(props:any) {
  return (
    <div><Header></Header>
    <ContentWrapper><ScreenFrame>{props.children}</ScreenFrame></ContentWrapper>
    </div>
  )
}
