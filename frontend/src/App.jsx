import { Routes, Route } from "react-router-dom";
import Welcome from "./assets/welcome-page/Welcome.jsx";
import Register from "./assets/Login-Registration/Register.jsx";
import Login from "./assets/Login-Registration/Login.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  );
}

export default App
