import React, { useState } from 'react'
import "./NameInput.css";
export const NameInput = (props) => {
    const [customername,setcustomerName]=useState('');
    const [displayinput,setDisplayInput]=useState(false);
  return (
    <div className='inputbox' style={{display:displayinput?'none':'block'}}>
        <input className='inputContainer' type="text"  onChange={(e)=>setcustomerName(e.target.value)}/>
        <button className='send_Container' onClick={()=>{
            props.actionProvider.DisplayName(customername)
            setDisplayInput(true);
        }}>SEND</button>
    </div>
  )
}
