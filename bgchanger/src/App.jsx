
import { useState } from "react"
function App() {

  const [color, setColor] = useState("olive")

  return (
  <div className = "w-full h-screen duration-200"style={{backgroundColor: color}}>
    
    <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">

    <div className="fixed flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-2 py-3 rounded-2xl">
      
      <button onClick={()=> setColor ("green")}
      className="outline-none px-4  rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
      <button onClick={()=> setColor ("red")}  className="outline-none px-4  rounded-full text-white shadow-lg" style={{backgroundColor: "Red"}}>Red</button>
      <button onClick={()=> setColor ("blue")} className="outline-none px-4  rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>

      </div>

      
      
      
    </div>
  </div>
  
  )
}

export default App
