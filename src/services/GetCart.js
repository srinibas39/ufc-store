import axios from "axios"

export const GetCart = ({ token }) => {
    return axios.get("/api/user/cart", {
        headers: {
            authorization: token
        }
    })
}