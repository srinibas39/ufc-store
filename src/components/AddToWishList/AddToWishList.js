
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";

export const AddToWishList = ({ el }) => {
    // const { state, dispatch } = useFilter()


    const { removeWishlist, addWishlist, prodState } = useProduct();
    const { token } = useAuth();
    const [item, setItem] = useState(false);

    useEffect(() => {
        // const timer = setTimeout(() => {
        const item = prodState.wishlistItems.find((ele) => ele._id === el._id);
        setItem(item)
        // }, 1000)
        // return () => clearTimeout(timer)
    }, [prodState.wishlistItems])
    return <>{
        item && item ? <div className='product-like pink' onClick={() => removeWishlist(token, el._id)}>
            <span className="material-icons"> favorite </span>
        </div> :
            <div className={`product-like`} onClick={() => addWishlist(token, el)}>
                <span className="material-icons"> favorite </span>
            </div>


    }


    </>


}