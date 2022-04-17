
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/FilterContext/FilterContext";


export const AddToCartButton = ({ el }) => {
    const { state, dispatch } = useFilter()
    const item = state.cart.find((ele) => el._id === ele._id);

    const navigate = useNavigate();

    return <>
        {
            item && item.qty > 0 ? <button onClick={() => navigate("/cart")}>GO TO CART</button> :
                <button onClick={() => (dispatch({ type: "ADD_TO_CART", payload: el }))}>
                    ADD TO CART
                </button>
        }
    </>
}