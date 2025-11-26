import { useState } from "react"
import { Header } from "./header"
import { RenderImages } from "./renderImages"

function HeaderImageLink(){
  const [score,setScore] = useState(0)
    const [bestScore,setBestScore] = useState(0)

const increaseScore= ()=>{
    console.log("hi");
    
    setScore(score+1)
  } 
const gameOver =
()=>{
    setScore(0)
    if(score>bestScore) setBestScore(score)
}
  return <>
  <Header score={score} bestScore={bestScore}/>
  <RenderImages increaseScore={increaseScore} gameOver={gameOver}/></>
}

export default HeaderImageLink