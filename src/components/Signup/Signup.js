import { useNavigate } from "react-router-dom"
import "./Signup.css"

export const Signup = () => {
    const navigate=useNavigate()
    return <div className="signup-container">
        <div className="signup">
            <h2>Sign up</h2>
            <div className="firstname-container">
                <label htmlFor="firstname">Firstname</label>
                <input type="firstname" name="firstname" />
            </div>
            <div className="lastname-container">
                <label htmlFor="lastname">Lastname</label>
                <input type="lastname" name="lastname" />
            </div>
            <div className="email-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>

            <div className="terms">
                <input type="checkbox" name="remember-me" />
                <label htmlFor="terms">{`I accept all terms & conditions`}</label>
            </div>

            <button className="btn-register">Create New Account</button>
            <div className="account-login" onClick={()=>navigate("/login")}>
                <p>Already have an account</p>
                <span className="material-icons"> arrow_forward_ios </span>
            </div>
        </div>
    </div>
}