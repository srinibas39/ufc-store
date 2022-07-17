import { createContext, useContext } from "react";
import { useState } from "react";
import { LoginService } from "../../services/LoginService";
import { SignupServices } from "../../services/SignupServices";
import { AuthContextType, AuthProviderType } from "./AuthContext.types";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderType) => {
  // @ts-ignore
  const local = JSON.parse(localStorage?.getItem("login"));
  const [user, setUser] = useState(local?.user);
  const [token, setToken] = useState(local?.token);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data, status } = await LoginService({ email, password });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: data.encodedToken, user: data.foundUser })
        );
      }
      setToken(data.encodedToken);
      setUser(data.foundUser);
      
      setLoggedIn(true);
    } catch (error: any) {
      setError(error);
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
      
    } catch (err:any) {
      setError(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        handleLogin,
        handleSignup,
        handleLogout,
        loggedIn,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
