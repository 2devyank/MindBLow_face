import React, { useState } from 'react'
import './Multipleop.css'
export const Multipleop = (props) => {
    const arr=['anxious','sad','grieving','mentally exhausted',
        'angry','frustrated','feeling guilty','afraid/fearfull','experiencing burnout']
        const [displayop,setdisplayOp]=useState(false);
  return (
    <div className='multipleboxcover' style={{display:displayop?'none':''}}>
        {arr.map((item,index)=>{
          return <button onClick={()=>{
            props.actionProvider.Displayemotions(item)
            setdisplayOp(true);
          }} className='item'>{item}</button>
        })}
    </div>
  )
}
