
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";

export const AddToWishList = ({ el }) => {



    const { removeWishlist, addWishlist, prodState } = useProduct();
    const { token } = useAuth();
    const [item, setItem] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            const item = prodState.wishlistItems.find((ele) => ele._id === el._id);
            setItem(item)

        }

    }, [prodState.wishlistItems])
    return <>{
        item && item ? <div className='product-like pink' onClick={() => token ? removeWishlist(token, el._id) : navigate("/login")}>
            <span className="material-icons"> favorite </span>
        </div> :
            <div className={`product-like`} onClick={() => token ? addWishlist(token, el) : navigate("/login")}>
                <span className="material-icons"> favorite </span>
            </div>


    }


    </>


}