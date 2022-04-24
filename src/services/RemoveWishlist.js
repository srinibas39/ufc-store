import axios from "axios"

export const RemoveWishlist = ({ token, id }) => {
    return axios.delete(`api/user/wishlist/${id}`, {
        headers: {
            authorization: token
        }
    })
}