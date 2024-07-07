import React, { useState } from "react";
import "../style/Onboarding.css";
import CustomizeInput from "../components/CustomizeInput";
import CustomizeSelect from "../components/Select/CustomizeSelect";
import Calendar from "../components/Calendar/Calendar";
import ReactSelect from "react-select";
import Otp from "../components/otp/Otp";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    firstName: "devyank",
    email: "dev@gmail",
    countryDigit: "+91",
    phone: "8448137331",
    specialties: ["Anxiety"],
    yearsOfExperience: "1",
    bio: "Hello there ",
    timings: [
      {
        day: "Monday",
        startTime: "10:00am",
        endTime: "12:00am",
      },
    ],
    couplefee:500,
    singlefee:400,
    meetLink: "https://meet",
    sessionTime: "1 hour",
    sessionGap: "30 min",
  });

  const speciality = [
    "Depression",
    "Anxiety",
    "PTSD",
    "Couples Therapy",
    "Addiction",
  ];
  const SessionTime = ["1 hour", "45 min", "30 min"];
  const GapTime = ["2 hour", "1 hour", "45 min", "30 min"];

  const handleInputChange = (name, e) => {
    console.log("change");
    const { value } = e.target;
    console.log("name", name);
    console.log("val", value);
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend API
    console.log("Form submitted:", formData);
    // Reset form or navigate to next step
  };

  const [isFocused, setIsFocused] = useState(false);

  
  const handleChangeSpecialties = (name, selected) => {
    setFormData({ ...formData, [name]: selected });
  };
  // console.log(formData);
  const digits = ["+91", "+1", "+12"];
  const [displayotp, setdisplayotp] = useState(false);
  const onOtpSubmit = (otp) => {
    console.log(otp);
  };

  const changeReactSelectoptions = (array) => {
    const selected = array.map((op) => ({
      value: op,
      label: op,
    }));
    return selected;
  };

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
                onChange={(e) => handleInputChange("firstName", e)}
                placeholder={"Enter Full Name"}
              />
            </div>

            <div className="w-3/4">
              <CustomizeInput
                type="email"
                placeholder={"Enter You Email"}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e)}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-3/4 flex gap-1">
                <CustomizeSelect
                 
                  digit={true}
                  placeholder={"+91"}
                 
                  options={changeReactSelectoptions(digits)}
                  selectedOptions={changeReactSelectoptions(digits).find(
                    (op) => op.value === formData.countryDigit
                  )}
                  handleChangeSelect={(option) =>
                    handleChangeSpecialties("countryDigit", option.value)
                  }
                />

                <CustomizeInput
                  type="tel"
                  placeholder={"8765439898"}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e)}
                />
                {formData.countryDigit && formData.phone && (
                  <button
                    onClick={() => {
                      setdisplayotp(true);
                    }}
                    className="px-4 py-2 w-1/3 background-blue"
                  >
                    Get Otp
                  </button>
                )}
                {/* {displayotp && <Otp length={6}/>} */}
              </div>
              {displayotp && <Otp length={6} onOtpSubmit={onOtpSubmit} />}
            </div>
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Speciality</h2>

            <CustomizeSelect
              
              digit={false}
              placeholder={"Depression,Anxiety"}
              options={changeReactSelectoptions(speciality)}
              selectedOptions={changeReactSelectoptions(speciality)?.filter((item)=>formData?.specialties?.includes(item.value)
              )}
              handleChangeSelect={(option) =>
                handleChangeSpecialties("specialties", option.map((op)=>op.value))
              }
            />

           

            <div className="w-3/4">
              <CustomizeInput
                type="number"
                placeholder={"You Experience"}
                value={formData.yearsOfExperience}
                onChange={(e) => handleInputChange("yearsOfExperience", e)}
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
                onChange={(e) => handleInputChange("bio", e)}
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="About Me"
              />
            </div>
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Timings</h2>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((item) => {
              return <Calendar key={item} item={item} setFormData={setFormData} formdata={formData.timings}/>;
            })}
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Session Fee</h2>
            <div className="w-1/3">
              <CustomizeInput
                value={formData.singlefee}
                onChange={(e) => handleInputChange("singlefee", e)}
                placeholder={"Fees for Individual"}
              />
              <CustomizeInput
                value={formData.couplefee}
                onChange={(e) => handleInputChange("couplefee", e)}
                placeholder={"Fees for Couples"}
              />
            </div>
          </div>
          <div className=" bg-gray-50 flex flex-col gap-2 p-2">
            <h2>Session Details</h2>
            <div className="w-1/3">
              <CustomizeInput
                value={formData.meetLink}
                onChange={(e) => handleInputChange("meetLink", e)}
                placeholder={"Link For Session"}
              />
              <ReactSelect
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: 0,
                    outline: 0,
                    color: "lightgray",
                    boxShadow: state.isFocused
                      ? "0px -2px 10px 0px rgba(18, 94, 104, 0.75)"
                      : "",
                    WebkitBoxShadow: state.isFocused
                      ? "0px -2px 10px 0px rgba(37, 48, 143, 0.75)"
                      : "",
                    MozBoxShadow: state.isFocused
                      ? "0px -2px 10px 0px rgba(34, 107, 73, 0.75)"
                      : "",
                  }),
                }}
                options={changeReactSelectoptions(SessionTime)}
                defaultValue={changeReactSelectoptions(SessionTime).find(
                  (op) => op.value === formData.sessionTime
                )}
                onChange={(option) =>
                  handleChangeSpecialties("sessionTime", option.value)
                }
                placeholder="Session time"
              />
              <ReactSelect
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: 0,
                    outline: 0,
                    color: "lightgray",
                    boxShadow: state.isFocused
                      ? "0px -2px 10px 0px rgba(18, 94, 104, 0.75)"
                      : "",
                    WebkitBoxShadow: state.isFocused
                      ? "0px -2px 10px 0px rgba(37, 48, 143, 0.75)"
                      : "",
                    MozBoxShadow: state.isFocused
                      ? "0px -2px 10px 0px rgba(34, 107, 73, 0.75)"
                      : "",
                  }),
                }}
                options={changeReactSelectoptions(GapTime)}
                defaultValue={changeReactSelectoptions(GapTime).find(
                  (op) => op.value === formData.sessionGap
                )}
                onChange={(option) =>
                  handleChangeSpecialties("sessionGap", option.value)
                }
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
