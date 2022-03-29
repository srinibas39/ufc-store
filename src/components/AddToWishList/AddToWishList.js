import { useFilter } from "../../context/FilterContext/FilterContext"


export const AddToWishList = ({ el }) => {
    const { state, dispatch } = useFilter()
    const item = state.wishList.find((ele) => el._id === ele._id);
    console.log(item);
    return <>{
        item && item ? <div class='product-like pink' >
            <span class="material-icons"> favorite </span>
        </div> :
            <div class='product-like' onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: el })}>
                <span class="material-icons"> favorite </span>
            </div>

    }

    </>


}