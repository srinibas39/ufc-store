import axios from "axios";


export const GetAllProducts = () => {
    return axios.get("/api/products");
}

