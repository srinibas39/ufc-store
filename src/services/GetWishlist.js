import axios from "axios"

export const GetWishList = ({ token }) => {
    return axios.get("/api/user/wishlist",
        {
            headers: {
                authorization: token
            }
        })
}