import axios from "axios"

type RemoveWishlistProps={
    token:string,
    id:string
}

export const RemoveWishlist = ({ token, id }:RemoveWishlistProps) => {
    return axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
            authorization: token
        }
    })
}