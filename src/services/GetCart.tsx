import axios from "axios"

type GetCartProps={
    token:string
}

export const GetCart = ({ token }:GetCartProps) => {
    return axios.get("/api/user/cart", {
        headers: {
            authorization: token
        }
    })
}