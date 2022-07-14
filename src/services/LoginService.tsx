import axios from "axios"

type LoginServiceProps={
    email:string,
    password:string
}

export const LoginService = async ({ email, password }:LoginServiceProps) => {
    return axios.post("/api/auth/login", { email, password })
}