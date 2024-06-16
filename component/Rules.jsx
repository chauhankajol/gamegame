import React from 'react'
import styled from 'styled-components'

export const Rules = () => {
  return (
    <RulesContainer>
       <div className="rules">
        <h2>How to play dice game</h2>
       </div>
       <div className="text">
        <p>Select any number</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
       </div>
    </RulesContainer>
  )
}

const RulesContainer=styled.div`
max-width:800px;
margin:0 auto;
margin-top:40px;
border-radius:10px;
background-Color:#fbf1f1;
padding:20px;
h2{
font-size:24px;

}
.text{
margin-top:24px;
}

`