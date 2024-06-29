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
  const speciality=[{value:'Depression',label:'Depression'}, {value:'Anxiety',label:'Anxiety'}, {value:'PTSD',label:"PTSD"}, {value:'Couples Therapy',label:'Couples Therapy'},{ value:'Addiction',lable:'Addiction'}];
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
 
  return (
    <div>Onboarding



  
    <div className="p-10 w-full">
      <h2>Psychologist Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
         <CustomizeInput
         type={"text"}
          value={formData.firstName}
           onChange={handleInputChange}
           placeholder={"Enter Full Name"}

           />
        </div>


        <div className="form-group">
          
          <CustomizeInput
            type={"email"}
            placeholder={"Enter You Email"}
            value={formData.email}
            onChange={handleInputChange}
           
          />
        </div>

        <div className="form-group">
          
          <CustomizeInput
            type={"tel"}
           placeholder={"Enter Your Phone Number"}
            value={formData.phone}
            onChange={handleInputChange}
            
          />
        </div>

       <CustomizeSelect options={speciality}/>

       
                  {/* // value={specialty}
                  // checked={formData.specialties.includes(specialty)}
                  // onChange={handleSpecialtiesChange} */}
               

        <div className="form-group">
          <label htmlFor="yearsOfExperience">Years of Experience</label>
          <input
            type="number"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Availability</label>
          <div className="checkbox-group">
            {Object.keys(formData.availability).map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  name={day}
                  checked={formData.availability[day]}
                  onChange={handleCheckboxChange}
                />
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  
    </div>
  )
}

export default Onboarding