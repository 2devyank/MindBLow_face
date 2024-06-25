import React, { useState } from 'react'
import "../style/Onboarding.css"

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



  
    <div className="psychologist-onboarding">
      <h2>Psychologist Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="licenseNumber">License Number</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Specialties</label>
          <div className="checkbox-group">
            {['Depression', 'Anxiety', 'PTSD', 'Couples Therapy', 'Addiction'].map((specialty) => (
              <label key={specialty}>
                <input
                  type="checkbox"
                  name="specialties"
                  value={specialty}
                  checked={formData.specialties.includes(specialty)}
                  onChange={handleSpecialtiesChange}
                />
                {specialty}
              </label>
            ))}
          </div>
        </div>

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