import { createContext, useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginService } from "../../services/LoginService";
import { SignupServices } from "../../services/SignupServices";

type AuthProviderType = {
  children: React.ReactNode;
};

type userType={
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        createdAt: string;
        updatedAt: string;
      } 


type AuthContextType = {
  token: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  handleLogin: (email: string, password: string) => void;
  handleSignup: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
  handleLogout: () => void;
  loggedIn: boolean;
};


export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderType) => {
   // @ts-ignore
  const local = JSON.parse(localStorage?.getItem("login"));
  const [user, setUser] = useState(local?.user);
  const [token, setToken] = useState(local?.token);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data, status } = await LoginService({ email, password });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: data.encodedToken, user: data.createdUser })
        );
      }
      setToken(data.encodedToken);
      setUser(data.foundUser);
      console.log("successfully logged in");
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    setUser(null);
    setToken(null);
  };

  const handleSignup = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const { data, status } = await SignupServices({
        firstName,
        lastName,
        email,
        password,
      });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: data.encodedToken, user: data.createdUser })
        );
      }
      setToken(data.encodedToken);
      setUser(data.createdUser);
      console.log("successfully signed in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, handleLogin, handleSignup, handleLogout, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
