import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(formData);

  const handleSubmit = async (e) => {
   e.preventDefault();
    try {
      const res = await axios.post(
        "/api/auth/signup",
        JSON.stringify(formData)
      );
      // save the JWT token in the server
      localStorage.setItem("token",res.data.encodedToken)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="login-container">
        <div class="login">
          <h2>Sign Up</h2>
          <div class="email-container">
            <label for="firstName">First Name</label>
            <input
              type="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div class="email-container">
            <label for="lastName">Last Name</label>
            <input
              type="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div class="email-container">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div class="password-container">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div class="forgotP-container">
            <div class="remember">
              <input type="checkbox" name="remember-me" />
              <label for="remember-me">I accept all terms and condition</label>
            </div>
          </div>
          <button class="btn-login" onClick={() => handleSubmit()}>
            Create new Account
          </button>
          <div class="create-new">
            <a href="./Login.html" class="link link2"></a>
            <p>Already have an account</p>
            <span class="material-icons"> arrow_forward_ios </span>
          </div>
        </div>
      </div>
    </>
  );
};
