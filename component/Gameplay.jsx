import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Totalscore } from '../Totalscore'
import { NumberSelector } from './NumberSelector'
import { RoleDice } from '../RoleDice'
import { Rules } from './Rules'

export const Gameplay = () => {
  const[score,setScore]=useState(0)
  const [selected,setSelected]=useState()
  const [currentDice,setCurrentDice]=useState(1)
 const [error,setError] =useState()
 const[showRules,setShowRules]=useState()
  


  const roledice=()=>{
  if(!selected){
    setError("you have to select a no.")
    return
  }
  
    let random = (Math.floor((Math.random() * 6) + 1))
    console.log(random)
 setCurrentDice((prev)=>random)

 if(selected ===  random){
  setScore((prev)=>prev+random)
 }
else{
  setScore((prev)=>prev-2)
}

setSelected(undefined)


   }

   const reset=()=>{
    setScore("0")
   }
   


  return (
    <div>
       <MainContainer >
       <div className="top-section">
       <Totalscore  score={score}/>
       <NumberSelector selected={selected}
        setSelected={setSelected} error={error}
        setError={setError}

       />

       </div>
       <RoleDice  currentDice={currentDice}
         roledice={roledice}/>
       <div className="btns">
        <Button onClick={reset}>Reset</Button>
        <Button  onClick={()=>setShowRules((prev)=>!prev)}>
          {showRules?"Hide":"show"}
          Rules</Button>
       </div>
       
       {showRules && <Rules/>}
       </MainContainer >
    </div>
  )
}

const MainContainer = styled.div`  
  

.top-section{
 display:flex;
 justify-content:space-between;
 align-items:center;
}

 .btns{
 display:flex;
  flex-direction:column;
  justify-content:center;

  align-items:center;
  padding: 10px 10px;
  gap: 8px
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

`