import axios from "axios"

type InDecCartProps={
    token:string,
    id:string,
    type:string
}

export const InDecCart = ({ token, id, type }:InDecCartProps) => {
    return axios.post(`/api/user/cart/${id}`,
        { action: { type } },
        {
            headers: {
                authorization: token
            }
        })
}