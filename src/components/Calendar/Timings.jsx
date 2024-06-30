import React, { useState } from 'react'
import CustomizeSelect from '../Select/CustomizeSelect'
import ReactSelect from 'react-select'
import DeleteIcon from '@mui/icons-material/Delete';

const Timings = () => {
    const time=[{value:"6:00 am",label:"6:00 am"},
        {value:"7:00 am",label:"7:00 am"},
        {value:"8:00 am",label:"8:00 am"},
        {value:"9:00 am",label:"9:00 am"},
        {value:"10:00 am",label:"10:00 am"},
        {value:"11:00 am",label:"11:00 am"},
        {value:"12:00 am",label:"12:00 am"},
        {value:"1:00 pm",label:"1:00 pm"},
        {value:"2:00 pm",label:"2:00 pm"}
    ]
    const [starttime,setstartime]=useState("");
    const [endtime,setendtime]=useState("");
    const handleStart=(selected)=>{
        setstartime(selected);
      }
      const handleEnd=(selected)=>{
        setendtime(selected);
      }
      const Deletetimings=()=>{
        setendtime("");
        setstartime("");
      }
  return (
    <div className='w-full h-20 custom border flex gap-3 align-middle items-center justify-center'>
        <ReactSelect
        styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border:0,
              outline:0,
              color:'lightgray',
              boxShadow:state.isFocused?'0px -2px 10px 0px rgba(18, 94, 104, 0.75)':'',
              WebkitBoxShadow:state.isFocused?'0px -2px 10px 0px rgba(37, 48, 143, 0.75)':'',
              MozBoxShadow:state.isFocused?'0px -2px 10px 0px rgba(34, 107, 73, 0.75)':'',
             }),
           }}
           options={time}
           value={starttime}
           onChange={handleStart}
           placeholder="start time"
        />
        <ReactSelect
        styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border:0,
              outline:0,
              color:'lightgray',
              boxShadow:state.isFocused?'0px -2px 10px 0px rgba(18, 94, 104, 0.75)':'',
              WebkitBoxShadow:state.isFocused?'0px -2px 10px 0px rgba(37, 48, 143, 0.75)':'',
              MozBoxShadow:state.isFocused?'0px -2px 10px 0px rgba(34, 107, 73, 0.75)':'',
             }),
           }}
           options={time}
           value={endtime}
           onChange={handleEnd}
           placeholder="End Time"
        />
<DeleteIcon className='cursor-pointer' onClick={Deletetimings}
/>
    </div>
  )
}

export default Timings