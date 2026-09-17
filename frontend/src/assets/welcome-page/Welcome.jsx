import { useNavigate } from "react-router-dom";
import Footer from "../../Footer.jsx";

export default function Welcome(){

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Register");
  };
    return(
        <>
        <div className="head">        
            <p className="logo">AgriVox</p><br/>
            <p className="paragraph">An AI-powered voice assistant bridging the gap for Ethiopian farmers and traders. Access
            real-time<br/> commodity prices and weather advisors in Amharic and English, simply by speaking.</p>            
            <button onClick={handleNavigate}>Get Started</button>
        </div>
        <div className="card-collection">
            <div className="card">
                <h3>Platform Value</h3>
                <h1>Predictive AI Analysis</h1>
                This platform is useful to predict the status of the soil, weather and regional trends to forecast future possibilities.
            </div>
        </div>         
        <Footer/>
        </>
    );
};