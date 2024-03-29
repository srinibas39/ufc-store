import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./Login.css";
import { useMode } from "../../context/ModeContext/ModeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastMsg } from "../ToastMsg/ToastMsg";
import * as EmailValidator from "email-validator";

export const Login = () => {
  const navigate = useNavigate();
  const { mode } = useMode();
  const { error } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { handleLogin, loggedIn, token } = useAuth();
  const location = useLocation();

  const handleSubmit = () => {
    if (form.email.trim() && form.password.trim()) {
      if (EmailValidator.validate(form.email)) {
        handleToast("logging you in");
        setTimeout(() => {
          handleLogin(form.email, form.password);
          navigate("/products");
        }, 1500);
      } else {
        handleToastError("Please check your email");
      }
    } else {
      handleToastError("Fields cannot be empty");
    }
  };

  useEffect(() => {
    if (token) {
      // @ts-ignore
      navigate(`${location?.state?.from?.pathname}`);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (error) {
      handleToastError(error);
    }
  }, [error]);

  const handleGuest = () => {
    handleToast("logging you in");
    setTimeout(() => {
      handleLogin("srinibaskhuntia39@gmail.com", "srinibaskhuntia");
      navigate("/products");
    }, 1500);
  };

  const handleToast = (msg: string) => {
    toast.success(<ToastMsg msg={msg} />, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleToastError = (msg: string) => {
    toast.error(<ToastMsg msg={msg} />, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="login-container" id={mode ? `dark` : ""}>
        <div className="login">
          <h2>Login</h2>

          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="btn-logins" onClick={() => handleSubmit()}>
            Login
          </button>
          <button onClick={() => handleGuest()}>Login as a Guest</button>
          <div className="create-new" onClick={() => navigate("/signup")}>
            <p id="no-margin">Create new Account</p>
            <span className="material-icons"> arrow_forward_ios </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
