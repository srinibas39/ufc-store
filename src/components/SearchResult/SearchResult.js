import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton"
import { AddToWishList } from "../AddToWishList/AddToWishList"
import "./SearchResult.css"


export const SearchResult = () => {

    const { prodState } = useProduct()

    const searchProducts = prodState.allProducts.filter((el) => el.title === prodState.selectedSuggestion);

    const navigate = useNavigate();

    const discountPrice = (price, discount) => {
        const newD = discount.split("%")[0];
        const nPrice = price * (newD / 100);
        return Number(nPrice) + Number(price);
    };


    return <div className="search-result">
        <h2>{searchProducts.length ?
            `Search results for "${prodState.selectedSuggestion}" - ${searchProducts.length} ${searchProducts.length === 1 ? "item" : "items"}` :
            `No Search results for "${prodState.selectedSuggestion}"`}  </h2>
        <div className="search-item-container">
            {
                searchProducts.length ? searchProducts.map((el, idx) => {
                    return <div key={idx} className="item-container">
                        <div className="item-img">
                            <img src={el.image} alt="loading" />
                            <AddToWishList el={el} />
                        </div>
                        <div className="item-list">
                            <p>{el.title}</p>
                            <div className="price">
                                <h2>&#8377; {el.price}</h2>
                                <h3>
                                    <del>
                                        &#8377; {discountPrice(el.price, el.discount)}
                                    </del>
                                </h3>
                            </div>
                            <h4>{el.discount}</h4>
                            <div className="item-buttons">
                                <button
                                    className="background"
                                    onClick={() => navigate(`/preview/${el._id}`)}
                                >
                                    PREVIEW
                                </button>
                                <AddToCartButton el={el} />
                            </div>
                        </div>
                    </div>


                }) : <img
                    style={{ height: "80%", width: "44%" }}
                    src={require("../../images/nodata.png")}
                />


            }
        </div>


    </div>
}