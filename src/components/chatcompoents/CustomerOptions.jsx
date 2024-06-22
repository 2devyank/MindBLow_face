import React, { useState } from 'react'
import "./CustomerOptions.css"

export const CustomerOptions = (props) => {
const [choice1,setchoice1]=useState('A couple coming together');
const [choice2,setchoice2]=useState('A couple coming together');
const [displayinput,setdisplayinput]=useState(false);
  return (
    <div className='optionsbox' style={{display:displayinput?'none':'block'}}>
        <div className='innerbox'>
        <button className='butchoice1' onClick={(e)=>{
            props.actionProvider.DisplayCustomerType(choice1)
            setdisplayinput(true);
        }
        }>an adult coming for myself</button>
        <button  className='butchoice2' onClick={(e)=>{
            props.actionProvider.DisplayCustomerType(choice2)
            setdisplayinput(true);
            }}>A couple coming together</button>
        </div>
        <span>Choose one of the options</span>
    </div>
  )
}
