import React from 'react'

const Card = (props) => {
    
  return (
    <div className=' mr-4 mb-4 bg-black text-white inline-block p-6  text-center rounded' >
      <img  className=' ml-10 h-32 w-32 rounded-full mb-3' src={props.photu} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>  Name {props.username} </h1>
        <h4 className='text-blue-400'>{props.prof}</h4>
        <h2>City {props.city},{props.age} </h2>
        <button className=' mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div> 
  )
}

export default Card