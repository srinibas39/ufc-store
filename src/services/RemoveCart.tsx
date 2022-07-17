import axios from "axios"

type RemoveCartProps={
    token:string,
    id:string
}

export const RemoveCart = ({ token, id }:RemoveCartProps) => {
    return axios.delete(`/api/user/cart/${id}`, {
        headers: {
            authorization: token
        }
    })
}