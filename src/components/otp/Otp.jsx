import React, { useEffect, useRef, useState } from "react";

const Otp = ({ length ,onOtpSubmit}) => {
  const [number, setnumber] = useState(new Array(length).fill(""));
  const handleClick = (index) => {
    inputrefs.current[index].setSelectionRange(1,1)
  };
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newotp = [...number];
    newotp[index] = value.substring(value.length - 1);
    setnumber(newotp);
    const combinedotp=newotp.join("");
    if(combinedotp.length===length){
        onOtpSubmit(combinedotp);
    }
    if(value && index+1<length && inputrefs.current[index+1]){
        inputrefs.current[index+1].focus();
    }
  };
  const handleKeyDown = (index,e) => {
    if(e.key==="Backspace"&& !number[index] && index>0 && inputrefs.current[index-1]){
        inputrefs.current[index-1].focus();
    }
  };
  const inputrefs = useRef([]);
  
  useEffect(() => {
    if (inputrefs.current[0]) inputrefs.current[0].focus();
  }, []);

  return (
    <div className="flex gap-3 items-center">
      OTP
      <div className="flex gap-3 ">
        {number.map((val, index) => {
          return (
            <input
              className="p-2 w-10 h-10 flex justify-center text-center items-center border border-blue-500"
              key={index}
              type="text"
              value={val}
              ref={(input) => (inputrefs.current[index] = input)}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Otp;
