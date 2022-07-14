import axios from "axios"

type GetWishListProps={
    token:string
}

export const GetWishList = ({ token }:GetWishListProps) => {
    return axios.get("/api/user/wishlist",
        {
            headers: {
                authorization: token
            }
        })
}