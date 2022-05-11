import "./OrderSummary.css"

export const OrderSummary = () => {
    return <div className="order-summary-container">
        <h2>Order Summary</h2>
        <p>Please take a moment to revie your order.</p>
        <table>
            <tr className="tr-header">
                <th>Item</th>
                <th>Quantity</th>
                <th>Amount</th>
            </tr>
            <tr className="tr-data">
                <td>Item A</td>
                <td>1</td>
                <td> &#8377;5000</td>
            </tr>
            <tr className="tr-data">
                <td>Item B</td>
                <td>2</td>
                <td> &#8377;5000</td>
            </tr>
            <tr className="tr-data">
                <td>Item C</td>
                <td>3</td>
                <td> &#8377;5000</td>
            </tr>
            <tr className="tr-data">
                <td className="bold">Order Total</td>
                <td></td>
                <td className="bold" >15000</td>
            </tr>
            <tr className="tr-data">
                <td className="bold">Coupon</td>
                <td></td>
                <td className="bold">-1000</td>
            </tr>
            <tr className="tr-data">
                <td className="bold">Delivery Charge</td>
                <td></td>
                <td className="bold">500</td>
            </tr>
            <tr className="tr-data">
                <td className="bold">Total Amount to be paid</td>
                <td></td>
                <td className="bold">123132</td>
            </tr>
        </table>
    </div>
}