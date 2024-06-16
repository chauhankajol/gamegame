import React from 'react'
import styled from 'styled-components'

export const Totalscore = ({score}) => {
  return (
    <Scorecontainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Scorecontainer>
  )
}
const Scorecontainer = styled.div`
max-width:200px;
text-align:center;

h1{
 font-size:50px;
 line-height:20px;
}

p{
font-size:24px;
font-weight:500px;
}
`