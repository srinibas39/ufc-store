import axios from "axios"
import { allProductType } from "../context/ProductContext/ProductContext.types"

type AddWishlistProps={
    token:string,
    product:allProductType
}
export const AddWishlist = ({ token, product }:AddWishlistProps) => {
    return axios.post("/api/user/wishlist",
        { product },
        {
            headers: {
                authorization: token
            }
        })
}