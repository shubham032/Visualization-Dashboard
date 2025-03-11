import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome"
import Dashboard from "./components/Dashboard"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
