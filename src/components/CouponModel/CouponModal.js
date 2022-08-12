import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext/ProductContext"
import "./CouponModal.css"

export const CouponModal = () => {
    const { setCouponText, couponMod, setCouponMod } = useProduct();
    const [couponModal, setCouponModal] = useState("");

    useEffect(() => {
        setCouponText(couponModal)
    }, [couponModal]);

    const handleCouponModal = (coupon) => {
        setCouponModal(coupon);
        setTimeout(() => setCouponMod(false), 0)
    }


    return <>
        {
            couponMod && <div className="coupon-modal-container" onClick={() => setCouponMod(false)}>

                <div className="coupon-modal" onClick={(e) => e.stopPropagation()}>
                    <span className="material-symbols-outlined cross" onClick={() => setCouponMod(false)}>
                        close
                    </span>
                    <div onClick={() => handleCouponModal("CART@10")}>
                        <input type="radio" name="coupon" className="coupon-ten"
                            onChange={() => { }}
                            checked={couponModal === "CART@10"} />
                        <label htmlFor="coupon-ten">CART@10</label>

                    </div>
                    <div onClick={() => handleCouponModal("CART@20")}>
                        <input type="radio" name="coupon" className="coupon-twenty"
                            onChange={() => { }}
                            checked={couponModal === "CART@20"} />
                        <label htmlFor="coupon-twenty">CART@20</label>

                    </div>
                    <div onClick={() => handleCouponModal("CART@30")}>
                        <input type="radio" name="coupon" className="coupon-thirty"
                            onChange={() => { }}
                            checked={couponModal === "CART@30"} />
                        <label htmlFor="coupon-thirty">CART@30</label>

                    </div>
                </div>
            </div>
        }
    </>
}