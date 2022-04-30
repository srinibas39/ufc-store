import axios from "axios"


export const InDecCart = ({ token, id, type }) => {
    return axios.post(`/api/user/cart/${id}`,
        { action: type },
        {
            headers: {
                authorization: token
            }
        })
}