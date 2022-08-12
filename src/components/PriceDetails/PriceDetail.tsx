import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { priceDetailsProps } from "./priceDetails.types";
import { useMode } from "../../context/ModeContext/ModeContext";
import { handleToast } from "../../utils/ToastUtils";
import { CouponModal } from "../CouponModel/CouponModal";

export const PriceDetail = ({
  totalQty,
  totalDiscountPrice,
  discount,
  calculateTotalPrice,
}: priceDetailsProps) => {
  const navigate = useNavigate();
  const { prodState, prodDispatch, couponText, couponMod, setCouponMod } =
    useProduct();
  const [finalPrice, setFinalPrice] = useState("");
  const [couponDiscount, setCouponDiscount] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponColor, setCouponColor] = useState(false);

  const { mode } = useMode();

  const handleCoupon = (coupon: string) => {
    handleToast(`Applying coupon code ${coupon}`);
    setTimeout(() => {
      setFinalPrice("");
      setCouponDiscount("");
      if (prodState.coupons.includes(coupon)) {
        let discountPercentage = Number(coupon.split("@")[1]) / 100;
        let couponDiscount = (
          calculateTotalPrice() * discountPercentage
        ).toFixed(2);
        const finalPrice = calculateTotalPrice() - Number(couponDiscount);
        setFinalPrice(finalPrice + "");
        setCouponDiscount(couponDiscount + "");
        setCoupon("Coupon successfully set.");
        setCouponColor(true);
        prodDispatch({
          type: "COUPON_APPLIED",
          payload: Number(couponDiscount),
        });
      } else {
        setCoupon("You have entered invalid coupon.");
        setCouponColor(false);
        prodDispatch({ type: "COUPON_APPLIED", payload: 0 });
      }
    }, 1500);
  };

  const handleCouponModal = () => {
    setCouponMod(true);
  };

  return (
    <>
      <div className="priceDetail-container" id={mode ? `dark` : ""}>
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
        <div className="coupons">
          <input
            type="text"
            placeholder="APPLY COUPONS=CART@10"
            value={couponText}
            onClick={handleCouponModal}
          ></input>
          <button onClick={() => handleCoupon(couponText)}>APPLY</button>
        </div>
        {coupon && (
          <small
            style={{
              textAlign: "center",
              color: couponColor ? "green" : "red",
            }}
          >
            {coupon}
          </small>
        )}
        <hr />
        <div className="priceDetail-total">
          <h2>TOTAL AMOUNT</h2>
          <h2>&#8377;{calculateTotalPrice()}</h2>
        </div>
        {finalPrice && (
          <>
            <p style={{ marginLeft: "auto" }}>- &#8377;{couponDiscount}</p>
            <hr style={{ marginLeft: "auto", width: "50px" }} />
            <p style={{ marginLeft: "auto", fontWeight: "bold" }}>
              &#8377;{finalPrice}
            </p>
          </>
        )}

        <hr />
        <p>
          You will save &#8377;{Number(discount()) + Number(couponDiscount)} on
          this order
        </p>
        <button className="background" onClick={() => navigate("/add")}>
          PLACE ORDER
        </button>
      </div>
      {couponMod && <CouponModal />}
    </>
  );
};
