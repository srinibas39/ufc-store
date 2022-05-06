import { useNavigate } from "react-router-dom"

export const PriceDetail = ({ totalQty, totalDiscountPrice, discount, calculateTotalPrice }) => {
    const navigate = useNavigate();
    return <div className="priceDetail-container">
        <h2>PRICE DETAILS</h2>
        <hr />
        <div className="priceDetail-price">
            <p>Price({totalQty()})</p>
            <p>&#8377;{totalDiscountPrice()}</p>
        </div>
        <div className="priceDetail-discount">
            <p>Discount</p>
            <p>- &#8377;{discount()}</p>
        </div>
        <div className="priceDetail-DC">
            <p>Delivery Charges</p>
            <p>+ &#8377;500</p>
        </div>
        <hr />
        <div className="priceDetail-total">
            <h2>TOTAL AMOUNT</h2>
            <h2>&#8377;{calculateTotalPrice()}</h2>
        </div>
        <hr />
        <p>You will save &#8377;1999 on this order</p>
        <button className="background" onClick={() => navigate("/add")}>PLACE ORDER</button>
    </div>
}