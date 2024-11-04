import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const getData = async ()=>{
    console.log("button clicked")
    const response = await axios.get('https://picsum.photos/v2/list')
    setData  (response.data)
    console.log(data)
    
  }
  useEffect(() => {
    getData()
  
    
  }, [])
  


  return (
    
    <div>
      <div>
        <button onClick={getData}
        className=' bg-teal-500 text-white rounded p-2 m-5'> Get Data </button>
        <div className='p-5 mt-5 bg-gray-950' >
          {data.map(function(elem,idx){
            return <div key= {idx} className='text-white bg-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1 className=''>{elem.author}</h1>
            </div>
          })}
        </div>
      </div>



    </div>



  )
}

export default App