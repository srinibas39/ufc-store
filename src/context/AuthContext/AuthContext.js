import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";
import { LoginService } from "../../services/LoginService";
import { SignupServices } from "../../services/SignupServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("");
    const [token, setToken] = useState("");

    const handleLogin = async (email, password) => {
        console.log({ email, password });
        try {
            const res = await LoginService({ email, password });



        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSignup = async (firstName, lastName, email, password) => {

        try {
            const { data, status } = await SignupServices({ firstName, lastName, email, password });
            if (status === 200 || status === 201) {
                localStorage.setItem("login",
                    JSON.stringify({ token: data.encodedToken, user: data.createdUser }))
            }
            setToken(data.encodedToken);
            setUser(data.createdUser);
            console.log("successfully signed in");
        }
        catch (error) {
            console.log(error);
        }
    }

    return <AuthContext.Provider value={{ handleLogin, handleSignup }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);