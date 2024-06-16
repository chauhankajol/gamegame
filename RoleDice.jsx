import React, { useState } from 'react'
import styled from "styled-components"

export const RoleDice = ({currentDice,roledice}) => {
  
  

 

 
  return (
    <DiceContainer>
   <div className="dice"  onClick={roledice}>
   
 <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />

   </div  >
   <p>Click on Dice to roll</p>
   
    </DiceContainer>
  )
}

const DiceContainer=styled.div`
    display:flex;
flex-direction:column;
  margin-top:48px;
  align-items:center;

 .dice{
 cursor:pointer
  }
  p{
  
  font-size:24px
  
  }
  .dice img{
  width:100px;
  height:100px;
  }
`