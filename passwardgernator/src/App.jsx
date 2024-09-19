import { useCallback, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState (false)
  const [charAllowed, setcharAllowed]= useState(false)
  const [password, setpasword]= useState("")

  const PasswordGenertor = useCallback (()=> {

    pass = ""
    str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()"
    
    for (let i = 1; i <= array.length; i++) {
      const element = array[index];
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt (char)
    }
      setpasword(pass)
  }, [length, numberAllowed , charAllowed, setpasword])

  return (
    <div className=" w-full   max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-white">
       <h1 className=' text-black text-center'>Password Gernator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'> <input type="Text" value={password} className='outline-none w-full py-1 px-3 mb-5' placeholder='password' readOnly /> 
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mb=5'> Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 text-orange">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
       </div>
  )
}


export default App
