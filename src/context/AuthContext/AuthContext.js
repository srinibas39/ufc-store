import { createContext, useContext } from "react";
import { LoginService } from "../../services/LoginService";
import { SignupServices } from "../../services/SignupServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const handleLogin = async (email, password) => {
        console.log({ email, password });
        try {
            const res = await LoginService({ email, password });
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSignup = async ( firstName, lastName, email, password ) => {
        console.log({firstName, lastName, email, password});
        try{
            const res=await SignupServices({firstName, lastName, email, password});
            console.log(res);
        }
        catch(error){
            console.log(error);
        }
    }

    return <AuthContext.Provider value={{ handleLogin , handleSignup}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);