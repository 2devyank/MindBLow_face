import { createContext, useContext, useMemo, useState } from "react";


const Psychdata=createContext();

const PsychdataContext=({children})=>{
 
    const [formData, setFormData] = useState({
        firstName: "",
        authid:"",
        email: "",
        countryDigit: "",
        phone: "",
        specialties: [],
        yearsOfExperience: "",
        bio: "",
        timings: [
        ],
        couplefee: '',
        singlefee: '',
        meetLink: "",
        sessionTime: "",
        sessionGap: "",
      });
      const [otp,setOtp]=useState('');
      const [encodedcode, setEncodedcode]=useState(''); 
      
      const getOtpCode=(data)=>{
       
        
        fetch('http://localhost:8000/verify/getcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)  
            })
            .then(response => response.json())
            .then((data) => {   
                console.log(data)
                setEncodedcode(data)
            }
        )
            .catch(error => console.error('Error:', error));
      }
      const verifyOtpCode=()=>{
        const verifypara={otp:otp,verification_Key:encodedcode}
        console.log("sec",otp);
        console.log("sec2",encodedcode);
        fetch('http://localhost:8000/verify/verifycode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(verifypara)  
            })
            .then(response => response.json())
            .then(data => {
              console.log("asdfg",data);
             
              setFormData({ ...formData, ["authid"]:data.Details});
            }
          )
            .catch(error => console.error('Error:', error));
      }
     
// const obj=useMemo(()=>({
//     formData,setFormData,getOtpCode,verifyOtpCode,encodedcode,otp,setOtp
// }),[formData])
const someUniqueKey="devyank";
    return (
        <Psychdata.Provider value={{formData,setFormData,getOtpCode,verifyOtpCode,encodedcode,otp,setOtp}} key={someUniqueKey}>
            {children}
        </Psychdata.Provider>
    )
}
export default PsychdataContext;

export const Psychstate=()=>{
    return useContext(Psychdata);
}