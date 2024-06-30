import { Switch } from '@mui/material'
import React, { useState } from 'react'
import Timings from './Timings';

const Calendar = ({item}) => {
    const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="w-1/3 p-4 flex flex-col gap-1">
        <div className='flex align-middle items-center '>
    <Switch checked={checked}
      onChange={handleChange} />
    {item}
      </div>
    {checked && <Timings/>}
  </div>
  )
}

export default Calendar