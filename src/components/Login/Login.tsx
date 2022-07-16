import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./Login.css";
import { useMode } from "../../context/ModeContext/ModeContext";

export const Login = () => {
    const navigate = useNavigate();
    const { mode } = useMode();
    const [form, setForm] = useState({
        email: "", password: ""
    })


    const { handleLogin, loggedIn, token } = useAuth();
    const location = useLocation();

    const handleSubmit = () => {

        handleLogin(form.email, form.password);
        navigate("/products");
    }

    useEffect(() => {
        if (token) {
            // @ts-ignore
            navigate(`${location?.state?.from?.pathname}`)
        }
    }, [loggedIn])

    const handleGuest = () => {
        
        handleLogin("adarshbalika@gmail.com","adarshbalika");
        navigate("/products")
    }

    return <div className="login-container" id={mode?`dark`:""}>
        <div className="login">
            <h2>Login</h2>

            <div className="email-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" value={form.password} name="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <div className="forgotP-container">
                <div className="remember">
                    <input type="checkbox" name="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <a href="#">Forgot Your Password ?</a>
            </div>
            <button className="btn-logins" onClick={() => handleSubmit()} >Login</button>
            <button onClick={() => handleGuest()}>Login as a Guest</button>
            <div className="create-new" onClick={() => navigate("/signup")}>
                <p>Create new Account</p>
                <span className="material-icons"> arrow_forward_ios </span>
            </div>

        </div>

    </div>
}