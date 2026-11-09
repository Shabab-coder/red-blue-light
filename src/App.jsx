import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red");
  const [start, setStart] = useState(false)

  let containerStyleConfig = {
    backgroundColor: color,
  }

  function handleButton(){
    setStart(prev => !prev)
  }

  useEffect(() => {
    if(!start){
      return;
    }
    const intervalId = setInterval(() => {
      setColor(prev => prev === "red" ? "blue" : "red")
    }, 200)

    return () => clearInterval(intervalId)

  }, [start]);

  return (
    <>
      <div className = "container" onClick = {handleButton} style = {containerStyleConfig}></div>
    </>
  )
}

export default App
