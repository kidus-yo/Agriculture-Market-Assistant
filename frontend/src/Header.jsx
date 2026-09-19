import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Login"); 
    };

    const navigate2 = useNavigate();

    const handleNavigate2 = () => {
        navigate2("/Register"); 
    };

    const navigate3 = useNavigate();

    const handleNavigate3 = () => {
        navigate3("/"); 
    };



    return(
        <header>
            <nav>
                <div className="Taskbar">
                    <div className="left-section">
                        <img src="/agrivox-profile.png" alt="agrivox-logo" onClick={handleNavigate3}/>
                    </div>

                    <div className="middle-section">
                        <li><a onClick={handleNavigate3}>Market Predictions</a></li>
                        <li><a onClick={handleNavigate3}>Weather Forecasting</a></li>
                        <li><a onClick={handleNavigate3}>Soil Analysis</a></li>
                        <li><a onClick={handleNavigate3}>Smart Advisory</a></li>
                    </div>

                    <div className="right-section">
                        <li><a onClick={handleNavigate}>Sign In</a></li>
                        <button onClick={handleNavigate2}>Get Started</button>
                    </div>
                </div>
                
            </nav>
            <hr className="line"></hr>
        </header>
    );
}