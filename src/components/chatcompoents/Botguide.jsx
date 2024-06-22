import React from 'react'
import "./Botguide.css"

function Botguide  (props) {
  
    console.log(props);
    
  
  return (
    <div className='widget_ok_conatiner'>
    <button className='butok' onClick={props.actionProvider.handleMessage}>ok Got it!</button>
    </div>
  )
}

export default Botguide