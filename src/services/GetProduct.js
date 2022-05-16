import axios from "axios"

export const GetProduct = ({ id }) => {
    return axios.get(`/api/products/${id}`)
}