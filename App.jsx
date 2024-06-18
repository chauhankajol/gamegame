import { useState } from "react"
import { Startgame } from "./component/Startgame"
import { Gameplay } from "./component/Gameplay"





function App() {
 const[ isstarted,setIstarted]=useState(false
  
 )
 const toggle=()=>{
  setIstarted((prev)=>!prev)
 }

  return (
    
      <>
      {isstarted?<Gameplay/>:<Startgame  toggle={toggle}/>}
   
      </>
  )
}

export default App


