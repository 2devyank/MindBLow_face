import React, { useState } from 'react'
import ReactSelect from 'react-select'

const CustomizeSelect = ({options,placeholder,digit,selectedOptions,handleChangeSelect}) => {
  const CheckboxOption = ({ innerProps, label, isSelected }) => (
    <div className='p-2 flex gap-4' {...innerProps}>
      <input type="checkbox" checked={isSelected} readOnly />
      <label>{label}</label>
    </div>
  );
//  console.log("selec",selectedOptions);
  return (
    <>
   {!digit && (
     <ReactSelect 
     className='w-1/3 border-transparent'
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
      isMulti
      components={{
        Option:CheckboxOption,
        // DropdownIndicator: () => null,
        // IndicatorSeparator: () => null
      }}
      options={options} 
      onChange={handleChangeSelect}
      defaultValue={selectedOptions}
      placeholder={placeholder}
      />
    )} 
    {
      digit &&
    <ReactSelect 
     className='w-20 border-transparent'
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
      
      components={{
        Option:CheckboxOption,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null
      }}
      options={options} 
      onChange={handleChangeSelect}
      defaultValue={selectedOptions}
      placeholder={placeholder}
      />
    }
    </>
  )
}

export default CustomizeSelect