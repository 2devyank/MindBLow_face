import React, { useEffect, useState } from 'react'
import CustomizeSelect from '../Select/CustomizeSelect'
import ReactSelect from 'react-select'
import DeleteIcon from '@mui/icons-material/Delete';


const Timings = ({item,formdata,setFormData}) => {
    const time=["6:00 am",
       "7:00am",
        "8:00am",
        "9:00am",
       "10:00am",
        "11:00am",
        "12:00am",
        "1:00pm",
        "2:00pm"
    ]
    const [start,setstart]=useState('');
    const [end,setend]=useState('');

    
    const select=formdata.find((it)=>it.day===item);
    
    const changeReactSelectoptions = (array) => {
      const selected = array.map((op) => ({
        value: op,
        label: op,
      }));
      return selected;
    };
    const handleChangeSpecialties = (name, selected) => {
      setFormData({ ...formdata, [name]: [selected] });
    };
    useEffect(()=>{
      // setFormData((prev)=>({...formdata,timings:[prev.timings,{day:item,startTime:start,endTime:end}]}))
      if(end!==''){
        setFormData((prev) => ({
          ...prev,
          timings: [...prev.timings, {day: item, startTime: start, endTime: end}]
        }))
      }
    },[end])
  
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
      
          options={changeReactSelectoptions(time)}
                defaultValue={changeReactSelectoptions(time).find(
                  (op) => op.value === select?.startTime
                )}
                onChange={(option) =>
                  setstart(option.value)
                }
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
          options={changeReactSelectoptions(time)}
                defaultValue={changeReactSelectoptions(time).find(
                  (op) => op.value === select?.endTime
                )}
                onChange={(option) =>
                  setend(option.value)
                }
           placeholder="End Time"
        />
<DeleteIcon className='cursor-pointer' onClick={Deletetimings}
/>
    </div>
  )
}

export default Timings