import axios from "axios"


type SignupServicesProps={
    firstName:string,
    lastName:string,
    email:string,
    password:string
}

export const SignupServices = async ({ firstName, lastName, email, password }:SignupServicesProps) => {
    return axios.post("/api/auth/signup", {
        firstName, lastName, email, password
    })
}