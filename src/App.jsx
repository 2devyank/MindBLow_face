import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chat from "./page/Chat"
import HomePage from "./page/HomePage"
import Onboarding from "./page/Onboarding"
import PsychList from "./page/PsychList"
import Preview from "./page/Preview"


function App() {
  
  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/psych-register" element={<Onboarding/>}/>
      <Route path="/psychlist" element={<PsychList/>}/>
      <Route path="/preview" element={<Preview/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
