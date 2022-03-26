import axios from "axios";


export const signupService= async(signupData)=>{
    const res=await axios.post("/api/auth/signup",signupData);
    return res;
}
