import React from 'react'
import Card from './Card'

const App = () => {
  const user = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 29,
      "profession": "Software Developer",
      "profilePhoto": "https://example.com/photos/alice.jpg"
    },
    {
      "name": "Ahmed Ali",
      "city": "Riyadh",
      "age": 35,
      "profession": "Project Manager",
      "profilePhoto": "https://example.com/photos/ahmed.jpg"
    },
    {
      "name": "Sophie Wang",
      "city": "Shanghai",
      "age": 26,
      "profession": "Graphic Designer",
      "profilePhoto": "https://example.com/photos/sophie.jpg"
    },
    {
      "name": "Carlos Mendoza",
      "city": "Mexico City",
      "age": 42,
      "profession": "Financial Analyst",
      "profilePhoto": "https://example.com/photos/carlos.jpg"
    },
    {
      "name": "Hana Takahashi",
      "city": "Tokyo",
      "age": 31,
      "profession": "Marketing Specialist",
      "profilePhoto": "https://example.com/photos/hana.jpg"
    }
  ]
  


  
  return (
    <div>
      <div className='p-10'>
         {user.map(function(elem,idx){
          return <Card key={idx} username={elem.name} age={elem.age} prof={elem.profession} photu={elem.profile_photu}/>
      })}


      </div>
    </div>
    
   
      
    
  )
}

export default App