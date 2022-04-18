import axios from "axios"

export const GetWishlist = async ({ encodedToken }) => {
    return axios.get("/api/user/wishlist", {
        headers: {
            authorization: encodedToken,
        }
    })
}