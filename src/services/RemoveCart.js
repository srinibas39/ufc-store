import axios from "axios"

export const RemoveCart = ({ token, id }) => {
    return axios.delete(`/api/user/cart/${id}`, {
        headers: {
            authorization: token
        }
    })
}