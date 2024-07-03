import React from 'react'
import image from "../../../public/minddoc.jpeg"
const PsychCard = () => {
  return (
    <div className='w-60 border rounded-lg '>

    <div className=' flex p-2'>
       <div className='flex flex-col items-center'>
        <img className='w-20 h-20 rounded' src={image} alt="" />
         
         <button className='p-4'>View Bio</button>
       </div>
        <div>
            <h2>Name</h2>
            <h3>Profile</h3>
            <p>lorem1</p>
            <p>lorem2</p>
            <p>lorem3</p>
            <p>lorem6</p>
        </div>
    </div>
        <button className='w-full bg-blue-400 rounded-b-lg'>Book A Session</button>
        </div>
  )
}

export default PsychCard