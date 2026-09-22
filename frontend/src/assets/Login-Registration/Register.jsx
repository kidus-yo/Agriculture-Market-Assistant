import {useNavigate} from "react-router-dom";
import {useState} from 'react';

export default function Register(){

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Login"); 
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
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

    return (
        <div className="register-login">
            <h1><b>Registration</b></h1>
            First Name: <input
                style={inputStyle}
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
            />
            Last Name: <input
                style={inputStyle}
                type="text"
                name="fatherName"
                placeholder="Last Name"
                value={formData.fatherName}
                onChange={handleChange}
            />
            Phone Number: <input
                style={inputStyle}
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
            />
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
            Confirm Password: <input
                style={inputStyle}
                type="text"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                onChange={handleChange}
            />
            <button className="confirm">SUBMIT</button>
            <span>Already have an account? <button type="button" onClick={handleNavigate} className="navigate">Login</button></span>
        </div>
    );    
};