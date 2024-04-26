import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username : "bilal",
    age : 25,
  }

  return (
    <>
    <Card username = " chai aur code "  btntext="Learn More" />
    <Card username = "  Pakistan ki chai  "/>
    <Card/>

    
    <h1 className ="bg-green-400 text-blue-50 p-4 rounded-xl mt-10">
    Hello world!
  </h1>
 
</>

   
  )
}

export default App
