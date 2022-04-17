import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const navigate=useNavigate();
    return <div className="login-container">
        <div className="login">
            <h2>Login</h2>
            <div className="email-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <div className="forgotP-container">
                <div className="remember">
                    <input type="checkbox" name="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <a href="#">Forgot Your Password ?</a>
            </div>
            <button className="btn-logins">Login</button>
            <div className="create-new" onClick={()=>navigate("/signup")}>
                <p>Create new Account</p>
                <span className="material-icons"> arrow_forward_ios </span>
            </div>
        </div>
    </div>
}