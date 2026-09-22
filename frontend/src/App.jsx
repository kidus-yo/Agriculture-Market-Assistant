import { Routes, Route} from "react-router-dom";
import IntroPage from "./assets/Intro-page/IntroPage.jsx";
import Register from "./assets/Login-Registration/Register.jsx";
import Login from "./assets/Login-Registration/Login.jsx";
import Footer from "./Footer.jsx";


function App() {
  return (
    <>
      <div className="agrivox-page-wrapper">
        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<IntroPage/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App
