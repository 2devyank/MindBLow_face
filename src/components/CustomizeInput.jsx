import React, { useState } from 'react'

const CustomizeInput = ({placeholder,value,onChange}) => {
    const [isFocused,setIsFocused]=useState(false);
    return (
    <input
    className={`px-4 py-2 w-full
    rounded-md
    outline-none 
    transition-all duration-300 ease-in-out
    ${isFocused?'bg-white-500 border custom':'border-transparent bg-white'}
    `}
    onFocus={()=>setIsFocused(true)}
    onBlur={()=>setIsFocused(false)}
   
    value={value}
    onChange={onChange}
    required
    placeholder={placeholder}
  />
  )
}

export default CustomizeInput