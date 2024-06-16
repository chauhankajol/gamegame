import React from 'react'
import styled from "styled-components"

export const Startgame = ({toggle}) => {
 




  return (
   <Container>
   
   <div>
   <img src="images/dices 1.jpg" alt="" />
   </div>

    <div  className='content'>
        <h1 >
            Dice game
        </h1>
        <Button onClick={toggle}>play Now</Button>
    </div>
   </Container>
  )
}
 const Container = styled.div`
  max-width:1180px;
 
  display:flex;
  margin: 0 auto;
  height:100vh;
  align-items:center;
  
  .content{
  h1 {  
  font-size:96px;
  white-space:nowrap

  }
  }

 `
 const Button= styled.button`

 background-color :black;
 color: white;
 padding 10px 18px;
 border-radius:5px;
 min-width:220px
 border :none;
 font-size:16px;
 border: 1px solid transparent;
 transition:0.4s background ease-in;
 cursor: pointer;

&:hover{
background-color:white;
color:black;
border: 1px solid black
transition:0.4s background ease-in;

}

 `