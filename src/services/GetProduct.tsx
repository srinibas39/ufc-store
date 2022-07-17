import axios from "axios"

type GetProductProps={
    id:string
}

export const GetProduct = ({ id }:GetProductProps) => {
    return axios.get(`/api/products/${id}`)
}