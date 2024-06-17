import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chat from "./page/Chat"


function App() {
  
  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path="/chat" element={<Chat/>}/>
      <Route/>
      <Route/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
