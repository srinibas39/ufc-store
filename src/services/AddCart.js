import axios from "axios"


export const AddCart = ({ token, product }) => {
    return axios.post("/api/user/cart",
        { product },
        {
            headers: {
                authorization: token
            }
        })
}