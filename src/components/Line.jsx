import React from 'react'
import styled from 'styled-components'

const LineWrapper = styled.div`
width: 370;
height: 20;
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
gap: 10px;

div{

    width: 340px;
    /* border-width: 0.7px; */
    border-top: 0.7px solid #CDCDCD;
}


`

const Line = () => {
  return (
    <LineWrapper>
<div></div>

    </LineWrapper>
  )
}

export default Line