import axios from "axios"
import { allProductType } from "../context/ProductContext/ProductContext.types"

type AddCartProps={
    token:string,
    product:allProductType
}

export const AddCart = ({ token, product }:AddCartProps) => {
    return axios.post("/api/user/cart",
        { product },
        {
            headers: {
                authorization: token
            }
        })
}