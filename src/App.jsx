import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chat from "./page/Chat"
import HomePage from "./page/HomePage"
import Onboarding from "./page/Onboarding"


function App() {
  
  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/psych-register" element={<Onboarding/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
