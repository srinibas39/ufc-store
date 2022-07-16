import { useProduct } from "../../context/ProductContext/ProductContext";
import "./OrderSummary.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const { prodState, removeCart } = useProduct();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    let tp = 0;
    prodState.cartItems.forEach((el) => {
      tp += Number(el.price) * el.qty;
    });
    return tp;
  };

  const downloadResume = () => {
    const input = document.querySelector(".order-summary-container");
    html2canvas(input as HTMLElement)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
        });
        pdf.addImage(imgData, "JPEG", 0, 0, 300, 100);
        pdf.save("invoice.save");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const loadScript = async (url: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const removeAllCartItems = () => {
    for (let i = 0; i < prodState.cartItems.length; i++) {
      removeCart(token, prodState.cartItems[i]._id);
    }
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    const options = {
      key: "rzp_test_CFt74CaU0MZr0F",
      amount: calculateTotalPrice() * 100 + 50000 - prodState.coupon * 100,
      currency: "INR",
      name: "UFC store",
      description: "Test Transaction",
      image: require("../../images/ufc-logo.jpg"),
      //   @ts-ignore
      order_id: res.id,
      handler: removeAllCartItems(),
      callback_url: navigate("/products"),
      prefill: {
        name: user?.firstName + " " + user?.lastName,
        email: user?.email,
        contact: "7008091784",
      },

      theme: {
        color: "#3399cc",
      },
    };
    // @ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
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
            {prodState.cartItems.map((el) => {
              return (
                <tr className="tr-data" key={el._id}>
                  <td>
                    {el.title}(&#8377;{el.price})
                  </td>
                  <td>{el.qty}</td>
                  <td> &#8377;{Number(el.price) * el.qty}</td>
                </tr>
              );
            })}

            <tr className="tr-data">
              <td className="bold">Order Total</td>
              <td></td>
              <td className="bold">&#8377; {calculateTotalPrice()}</td>
            </tr>
            {prodState.coupon !== 0 && (
              <tr className="tr-data">
                <td className="bold">Coupon</td>
                <td></td>
                <td className="bold">- &#8377;{prodState.coupon}</td>
              </tr>
            )}

            <tr className="tr-data">
              <td className="bold">Delivery Charge</td>
              <td></td>
              <td className="bold">&#8377;500</td>
            </tr>
            <tr className="tr-data">
              <td className="bold">Total Amount to be paid</td>
              <td></td>
              <td className="bold">
                &#8377; {calculateTotalPrice() + 500 - prodState.coupon}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn-checkout" onClick={displayRazorpay}>
        CHECKOUT
      </button>
      <button className="btn-invoice" onClick={() => downloadResume()}>
        DOWNLOAD INVOICE AS PDF
      </button>
    </>
  );
};
