import React, { useState } from 'react'
import styled from 'styled-components'
export const NumberSelector = ({ error,setError,selected,setSelected}) => {
    const arr=[1,2,3,4,5,6]
    const NumberSelectorhandler=(value)=>
      {
        setSelected(value);
        setError("");
      }

     return (

    <NumberSelectorContainer>
      <p className='error'>{error}</p>
    <div className='flex'>
 {
    arr.map((value, i)=>(
        <Box 
        isSelected = {value === selected}
        key={i}
        
        onClick={()=>NumberSelectorhandler(value)}>{value}</Box>
    ))
}


    </div>
    <p>selectNumber</p>
    </NumberSelectorContainer>
  )
}

 const NumberSelectorContainer = styled.div`
  display:flex;
flex-direction:column;
align-items:end;


  .flex{
   display:flex;
   gap:24px;
  }
   p{
    font-size:24px;
    font-weight:500;
   }
    .error{
     color:red
    }

 `

const Box=styled.div`

height: 42px;
width: 42px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:500;
background-color:${(props)=>(props.isSelected?"black":"white")};
color:${(props)=>(!props.isSelected?"black":"white")}



`

