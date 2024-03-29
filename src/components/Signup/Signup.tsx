import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./Signup.css";
import { useMode } from "../../context/ModeContext/ModeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastMsg } from "../ToastMsg/ToastMsg";
import * as EmailValidator from "email-validator";

export const Signup = () => {
  const navigate = useNavigate();
  const { mode } = useMode();
  const { error } = useAuth();

  useEffect(() => {
    if (error) {
      handleToastError(error);
    }
  }, [error]);

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

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { handleSignup } = useAuth();
  const handleSubmit = () => {
    if (
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.password.trim()
    ) {
      if (EmailValidator.validate(form.email)) {
        handleToast("signing you in");
        setTimeout(() => {
          handleSignup(
            form.firstName,
            form.lastName,
            form.email,
            form.password
          );
          navigate("/products");
        }, 1500);
      } else {
        handleToastError("Please check your email");
      }
    } else {
      handleToastError("Fields cannot be empty");
    }
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

  const handleDummy = () => {
    setForm({
      ...form,
      firstName: "Sriyasri",
      lastName: "Khuntia",
      email: "sriyasrikhuntia191@gmail.com",
      password: "12345678",
    });
  };

  return (
    <>
      <div className="signup-container" id={mode ? `dark` : ""}>
        <div className="signup">
          <h2>Sign up</h2>
          <div className="firstname-container">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className="lastname-container">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
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
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button className="btn-register" onClick={handleDummy}>
            Fill with dummy data
          </button>
          <button className="btn-register" onClick={() => handleSubmit()}>
            Create New Account
          </button>
          <div className="account-login" onClick={() => navigate("/login")}>
            <p>Already have an account</p>
            <span className="material-icons"> arrow_forward_ios </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
