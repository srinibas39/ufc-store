import axios from "axios"

export const AddWishlist = ({ token, product }) => {
    return axios.post("/api/user/wishlist",
        { product },
        {
            headers: {
                authorization: token
            }
        })
}