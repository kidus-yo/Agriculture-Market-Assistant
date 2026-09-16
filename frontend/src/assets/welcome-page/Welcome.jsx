import { useNavigate } from "react-router-dom";
export default function Welcome(){

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Register");
  };
    return(
        <>
        <div className="header">        
            <p className="logo">AgriVox</p><br/>
            <p className="paragraph">AgriVox is an AI-powered agricultural intelligence platform designed to bridge the data gap
            for local farmers, traders, and agricultural stakeholders through accessible, voice-first 
            technology. By integrating multilingual voice recognition in both Amharic and English, 
            the platform enables users to effortlessly check real-time commodity prices—such as White 
            Teff and Red Wheat across regional trade hubs like Adama—and receive localized weather 
            advisories using simple spoken commands. AgriVox transforms complex market data and 
            weather trends into actionable, real-time insights, empowering rural communities 
            with modern digital tools tailored to local trading needs.</p>            
            <button onClick={handleNavigate}>Get Started</button>
        </div>   
        <div className="card">
            <img/>
            this website is useful to prdict the status of the soil, weather and others too
        </div>   
        <div className="card">
            <img src="./agrivox-profile.png"/>
            in addition it will predict all of the future possibilities
        </div>         
      
        </>
    );
};