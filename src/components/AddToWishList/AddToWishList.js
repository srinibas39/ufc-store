import { useFilter } from "../../context/FilterContext/FilterContext"


export const AddToWishList = ({ el }) => {
    const { state, dispatch } = useFilter()
    const item = state.wishList.find((ele) => el._id === ele._id);
    console.log(item);
    return <>{
        item && item ? <div className='product-like pink' onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: el })} >
            <span className="material-icons"> favorite </span>
        </div> :
            <div className='product-like' onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: el })}>
                <span className="material-icons"> favorite </span>
            </div>

    }

    </>


}