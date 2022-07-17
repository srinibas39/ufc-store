import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Address.css";
import { useAddress } from "../../context/AddressContext/AddressContext";
import { useMode } from "../../context/ModeContext/ModeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleToast } from "../../utils/ToastUtils";

export const Address = () => {
  const navigate = useNavigate();
  const { addressState, addressDispatch } = useAddress();
  const { mode } = useMode();

  useEffect(() => {
    if (addressState.addresses.length === 0) {
      addressDispatch({ type: "ADDRESS", payload: addressState.addressDummy });
    }
  }, []);

  const [payError, setPayError] = useState("");

  const handlePay = () => {
    addressState.addressSelected !== null
      ? setPayError("")
      : setPayError("Please select a delivery address");
    addressState.addressSelected !== null && navigate("/summary");
  };

//   handle selected address

const handleAddressSelected=(el:any)=>{
    handleToast("Your address is getting selected")
    setTimeout(()=>addressDispatch({ type: "ADDRESS_SELECTED", payload: el }),1000)
}

// handle Remove Address

const handleRemoveAddress=(el:any)=>{
    handleToast("Your address is getting removed")
    setTimeout(()=> addressDispatch({ type: "ADDRESS_REMOVE", payload: el}),1500)
}

  return (
    <>
      <div className="address-container">
        <h2 id={mode ? `dark` : ""}>My addresses(2)</h2>

        {addressState.addresses &&
          addressState.addresses.map((el, idx) => {
            return (
              <div className="address" key={idx} id={mode ? `dark` : ""}>
                <div>
                  <input
                    type="radio"
                    name="address"
                    className="address-input"
                    onClick={() => handleAddressSelected(el)}
                  />
                  <label htmlFor="address-input">
                    <p className="address-text">{el.name}</p>
                    <p className="address-text">{el.house}</p>
                    <p className="address-text">
                      {el.city} {el.state} {el.zipcode}
                    </p>
                    <p className="address-text">{el.country}</p>
                    <p className="address-text phn">Phone number:{el.phn}</p>
                    <div>
                      <button
                        onClick={() => (
                          addressDispatch({
                            type: "ADDRESS_REMOVE",
                            payload: el,
                          }),
                          addressDispatch({
                            type: "ADDRESS_EDIT",
                            payload: el,
                          }),
                          navigate("/address")
                        )}
                      >
                        EDIT
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemoveAddress(el)}
                      >
                        REMOVE
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            );
          })}

        <div
          className="add-new-address"
          id={mode ? `dark` : ""}
          onClick={() => navigate("/address")}
        >
          <span className="material-symbols-outlined">add</span>
          ADD NEW ADDRESS
        </div>

        <div className="pay">
          <button className="pay-btn" onClick={() => handlePay()}>
            PROCEED
          </button>
        </div>
        {payError && (
          <p style={{ color: "red", textAlign: "center" }}>
            *Please select a delivery address.
          </p>
        )}
      </div>
      <ToastContainer />
    </>
  );
};
