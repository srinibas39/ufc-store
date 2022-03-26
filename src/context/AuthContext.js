import { createContext , useContext , useState } from "react";
import { signupService } from "../services/signupService";


export const AuthContext =  createContext();

export const AuthProvider = ({ children }) => {

    const [user,setUser]=useState({});
    const [token,setToken]=useState(null);
    console.log(user);
    console.log(token);
    const handleSignup = async (signupData) => {
        try {
            const res = await signupService(signupData);
            console.log(res);
            if(res.status===200 || res.status===201){
                localStorage.setItem("login",JSON.stringify({
                    token:res.data.encodedToken,user:res.data.createdUser
                }))
               
                setUser(res.data.createdUser);
                setToken(res.data.encodedToken)
            }
           
        }
        catch (err) {
            console.log(err);
        }
    };

   return(
       <AuthContext.Provider value={{handleSignup}}>
           {children}
       </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext)