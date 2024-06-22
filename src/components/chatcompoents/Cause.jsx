import React, { useState } from 'react'
import './Cause.css'

const Cause = (props) => {
    const arr=['Money - debt, bills etc','problems with family',
        'Health-physical/mental','Addiction-drugs/porn/social Medai',
        'Major life changes - birth of a child,job less',
        'Difference in values, goals, priority']
        const [displayop,setdisplayOp]=useState(false);
  return (
    <div className='multipleboxcover' style={{display:displayop?'none':''}}>
 {arr.map((item,index)=>{
          return <button onClick={()=>{
            props.actionProvider.DisplayCause(item)
            setdisplayOp(true);
          }} className='item'>{item}</button>
        })}
    </div>
  )
}

export default Cause