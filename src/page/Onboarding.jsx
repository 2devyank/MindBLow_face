import React, { useState } from "react";
import "../style/Onboarding.css";
import CustomizeInput from "../components/CustomizeInput";
import CustomizeSelect from "../components/Select/CustomizeSelect";
import Calendar from "../components/Calendar/Calendar";
import ReactSelect from "react-select";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    CountryDigit:"",
    phone: "",
    licenseNumber: "",
    specialties: [],
    yearsOfExperience: "",
    bio: "",
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  });
  const CountryDigit = [{ value: "India", label: "+91" }];
  const speciality = [
    { value: "Depression", label: "Depression" },
    { value: "Anxiety", label: "Anxiety" },
    { value: "PTSD", label: "PTSD" },
    { value: "Couples Therapy", label: "Couples Therapy" },
    { value: "Addiction", label: "Addiction" },
  ];
  const SessionTime=[{ value: "1 hour", label: "1 hour" },{ value: "45 min", label: "45 min" },{ value: "30 min", label: "30 min" }]
  const GapTime=[{ value: "2 hour", label: "2 hour" },{ value: "1 hour", label: "1 hour" },{ value: "45 min", label: "45 min" },{ value: "30 min", label: "30 min" }]
 
  const handleInputChange = (name,e) => {
    console.log("change");
    const { value } = e.target;
    console.log("name",name);
    console.log("val",value);
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      availability: { ...formData.availability, [name]: checked },
    });
  };

  const handleSpecialtiesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, value],
      });
    } else {
      setFormData({
        ...formData,
        specialties: formData.specialties.filter(
          (specialty) => specialty !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend API
    console.log("Form submitted:", formData);
    // Reset form or navigate to next step
  };
 
  const [isFocused, setIsFocused] = useState(false);
  // const [selectedOptions,setSelectedOptions]=useState([]);
  const handleChangeSelect=(name,selected)=>{
    console.log("inn",selected)
    // setSelectedOptions(selected.label);
    setFormData({ ...formData, [name]: selected.label });
  }
  console.log(formData.CountryDigit+formData.phone)
 
  return (
    <div>
      Onboarding
      <div className="p-10 w-full  flex flex-col gap-4">
        <h2>Psychologist Onboarding</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Personal Information</h2>
            <div className="w-3/4">
              <CustomizeInput
                type="text"
                value={formData.firstName}
                onChange={(e)=>handleInputChange("firstName",e)}
                placeholder={"Enter Full Name"}
              />
            </div>

            <div className="w-3/4">
              <CustomizeInput
                type="email"
                placeholder={"Enter You Email"}
                value={formData.email}
                onChange={(e)=>handleInputChange("email",e)}
              />
            </div>

            <div className="w-3/4 flex gap-1">
              <CustomizeSelect
                options={CountryDigit}
                digit={true}
                placeholder={"+91"}
                selectedOptions={formData.CountryDigit}
                handleChangeSelect={(option)=>handleChangeSelect("CountryDigit",option)}
              />
              <CustomizeInput
                type="tel"
                placeholder={"8765439898"}
                value={formData.phone}
                onChange={(e)=>handleInputChange("phone",e)}
              />
            </div>

          
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Speciality</h2>

            <CustomizeSelect
              options={speciality}
              digit={false}
              placeholder={"Depression,Anxiety"}
            />

            {/* // value={specialty}
                  // checked={formData.specialties.includes(specialty)}
                  // onChange={handleSpecialtiesChange} */}

            <div className="w-3/4">
              <CustomizeInput
                type="number"
                placeholder={"You Experience"}
                // value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-3/4">
              <textarea
                className={`${
                  isFocused
                    ? "bg-white-500 border custom"
                    : "border-transparent bg-white"
                }
            w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none`}
                id="bio"
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleInputChange}
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="About Me"
              />
            </div>
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Timings</h2>
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((item) => {
              return(
               <Calendar key={item} item={item}/>
              );
            })}
           
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Session Fee</h2>
            <div className='w-1/3'>  
        <CustomizeInput placeholder={"Fees for Individual"}/>
        <CustomizeInput placeholder={"Fees for Couples"}/>
    </div>
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Session Details</h2>
            <div className='w-1/3'>  
        <CustomizeInput placeholder={"Link For Session"}/>
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
           options={SessionTime}
          //  value={endtime}
          //  onChange={handleEnd}
           placeholder="Session time"
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
           options={GapTime}
          //  value={endtime}
          //  onChange={handleEnd}
           placeholder="Gap Between Session's"
        />
    </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
