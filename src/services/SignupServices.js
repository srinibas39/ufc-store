import axios from "axios"


export const SignupServices = async ({ firstName, lastName, email, password }) => {
    return axios.post("/api/auth/signup", {
        firstName, lastName, email, password
    })
}