import { useProduct } from "../../context/ProductContext/ProductContext"
import "./OrderSummary.css"

export const OrderSummary = () => {
    const { prodState } = useProduct();

    const calculateTotalPrice = () => {
        let tp = 0;
        prodState.cartItems.forEach((el) => {
            tp += (Number(el.price) * el.qty);
        });
        return tp;
    };

    return <>
        <div className="order-summary-container">
            <h2>Order Summary</h2>
            <p>Please take a moment to revie your order.</p>
            <table>
                <tr className="tr-header">
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                {
                    prodState.cartItems.map((el) => {
                        return <tr className="tr-data" key={el._id}>
                            <td>{el.title}(&#8377;{el.price})</td>
                            <td>{el.qty}</td>
                            <td> &#8377;{el.price * el.qty}</td>
                        </tr>
                    })
                }

                <tr className="tr-data">
                    <td className="bold">Order Total</td>
                    <td></td>
                    <td className="bold" >&#8377; {calculateTotalPrice()}</td>
                </tr>
                {
                    prodState.coupon !== 0 && <tr className="tr-data">
                        <td className="bold">Coupon</td>
                        <td></td>
                        <td className="bold">- &#8377;{prodState.coupon}</td>
                    </tr>
                }

                <tr className="tr-data">
                    <td className="bold">Delivery Charge</td>
                    <td></td>
                    <td className="bold">&#8377;500</td>
                </tr>
                <tr className="tr-data">
                    <td className="bold">Total Amount to be paid</td>
                    <td></td>
                    <td className="bold">&#8377; {calculateTotalPrice() + 500 - prodState.coupon}</td>
                </tr>
            </table>
        </div>
        <button className="btn-checkout">CHECKOUT</button>
        <button className="btn-invoice">DOWNLOAD INVOICE AS PDF</button>
    </>
}