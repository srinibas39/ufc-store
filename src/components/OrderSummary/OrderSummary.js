import { useProduct } from "../../context/ProductContext/ProductContext"
import "./OrderSummary.css"
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";

export const OrderSummary = () => {
    const { prodState } = useProduct();

    const calculateTotalPrice = () => {
        let tp = 0;
        prodState.cartItems.forEach((el) => {
            tp += (Number(el.price) * el.qty);
        });
        return tp;
    };

    const downloadResume = () => {
        const input = document.querySelector(".order-summary-container");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "landscape"
            });
            pdf.addImage(imgData, "JPEG", 0, 0, 300,100);
            pdf.save("invoice.save");

        }).catch((error) => {
            console.log(error);
        })


    }

    return <>
        <div className="order-summary-container">
            <h2>Order Summary</h2>
            <p>Please take a moment to revie your order.</p>
            <table>
                <thead>
                    <tr className="tr-header">
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>

          
        </div>
        <button className="btn-checkout">CHECKOUT</button>
        <button className="btn-invoice" onClick={() => downloadResume()}>DOWNLOAD INVOICE AS PDF</button>
    </>
}