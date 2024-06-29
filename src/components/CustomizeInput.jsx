import React, { useState } from 'react'

const CustomizeInput = ({type,placeholder,value,onChange}) => {
    const [isFocused,setIsFocused]=useState(false);
    return (
    <input
    className={`px-4 py-2 w-1/3
    rounded-md
    outline-none 
    transition-all duration-300 ease-in-out
    ${isFocused?'bg-gray-100 border':'border-transparent bg-white'}
    `}
    onFocus={()=>setIsFocused(true)}
    onBlur={()=>setIsFocused(false)}
    type={type}
    value={value}
    onChange={onChange}
    required
    placeholder={placeholder}
  />
  )
}

export default CustomizeInput