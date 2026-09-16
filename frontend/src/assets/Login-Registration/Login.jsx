import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Login(){

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Register"); 
    };

    const [formData,setFormData] = useState({
        email: '',
        password:'',
    });

    const handleChange = (e) =>  {
        const{name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const inputStyle = {
        padding: '10px 14px',
        fontSize: '16px',
        borderRadius: '6px',
        border: '2px solid #ccc',
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box',
    };
    return(
        <>
        <div className="register-login"> 
            <h1><b>Login</b></h1>
            Email: <input
                style={inputStyle}
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            Password: <input
                style={inputStyle}
                type="text"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <button className="confirm">LOG IN</button>
            <span>Don't have an account? <button type="button" onClick={handleNavigate} className="navigate">Register</button></span>
        </div>
        </>
    );
};
