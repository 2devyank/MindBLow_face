import { Switch } from '@mui/material'
import React, { useState } from 'react'
import Timings from './Timings';

const Calendar = ({item,formdata,setFormData}) => {
    const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const select=formdata.find((it)=>it.day===item);
  console.log(formdata);
  return (
    <div className="w-1/3 p-4 flex flex-col gap-1">
        <div className='flex align-middle items-center '>
    <Switch checked={select?true:checked}
      onChange={handleChange} />
    {item}
      </div>
    {checked||select && <Timings item={item} setFormData={setFormData} formdata={formdata} />}
  </div>
  )
}

export default Calendar