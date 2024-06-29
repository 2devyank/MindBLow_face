import React, { useState } from 'react'
import "../style/Onboarding.css"
import CustomizeInput from '../components/CustomizeInput';
import CustomizeSelect from '../components/Select/CustomizeSelect';

const Onboarding = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      licenseNumber: '',
      specialties: [],
      yearsOfExperience: '',
      bio: '',
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
    const CountryDigit=[{value:"India",label:"+91",}]
  const speciality=[{value:'Depression',label:'Depression'}, {value:'Anxiety',label:'Anxiety'}, {value:'PTSD',label:"PTSD"}, {value:'Couples Therapy',label:'Couples Therapy'},{ value:'Addiction',label:'Addiction'}];
    const handleInputChange = (e) => {
      const { name, value } = e.target;
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
        setFormData({ ...formData, specialties: [...formData.specialties, value] });
      } else {
        setFormData({
          ...formData,
          specialties: formData.specialties.filter((specialty) => specialty !== value),
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the formData to your backend API
      console.log('Form submitted:', formData);
      // Reset form or navigate to next step
    };
    const [isFocused,setIsFocused]=useState(false);
  return (
    <div>Onboarding



  
    <div className="p-10 w-full">
      <h2>Psychologist Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
         <CustomizeInput
         type="text"
          // value={formData.firstName}
           onChange={handleInputChange}
           placeholder={"Enter Full Name"}

           />
        </div>


        <div className="form-group">
          
          <CustomizeInput
            type="email"
            placeholder={"Enter You Email"}
            // value={formData.email}
            onChange={handleInputChange}
           
          />
        </div>

        <div className="w-3/4 flex gap-1">
       <CustomizeSelect options={CountryDigit} digit={true} placeholder={"+91"}/>
          <CustomizeInput
            type="tel"
           placeholder={"8765439898"}
            // value={formData.phone}
            onChange={handleInputChange}
            
          />
        </div>

       <CustomizeSelect options={speciality} digit={false} placeholder={"Depression,Anxiety"}/>

       
                  {/* // value={specialty}
                  // checked={formData.specialties.includes(specialty)}
                  // onChange={handleSpecialtiesChange} */}
               

        <div className="form-group">
         
         <CustomizeInput
          type="number"
          placeholder={"You Experience"}
           // value={formData.phone}
           onChange={handleInputChange}
         />
        </div>

        <div className="form-group">
          
          <textarea
          className={`${isFocused?'bg-white-500 border custom':'border-transparent bg-white'}
            w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none`}
            id="bio"
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleInputChange}
            required
            onFocus={()=>setIsFocused(true)}
            onBlur={()=>setIsFocused(false)}
            placeholder='About Me'
          />
        </div>

        
       

        <button type="submit">Submit</button>
      </form>
    </div>
  
    </div>
  )
}

export default Onboarding