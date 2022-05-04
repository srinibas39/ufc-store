import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import "./AddressForm.css"
import { useProduct } from "../../context/ProductContext/ProductContext";


export const AddressForm = () => {

    const navigate = useNavigate();
    const [addressForm, setAddressForm] = useState({
        country: "",
        name: "",
        house: "",
        city: "",
        state: "",
        zipcode: "",
        phn: "",
    })
    // console.log(addressForm);

    const { prodState, prodDispatch } = useProduct();



    useEffect(() => {
        prodState.addressEdit && setAddressForm(() => prodState.addressEdit)
    }, [prodState.addressEdit])


    return <>
        <div className="new-address-container">
            <h2>ADD NEW ADDRESS</h2>

            <div className="new-address-input">
                <input type="text" placeholder="Enter country" value={addressForm.country}
                    onChange={(e) => setAddressForm({ ...addressForm, country: e.target.value })} />
                <input type="text" placeholder="Enter name" value={addressForm.name}
                    onChange={(e) => setAddressForm({ ...addressForm, name: e.target.value })} />
                <input type="text" placeholder="Enter house no street colony" value={addressForm.house}
                    onChange={(e) => setAddressForm({ ...addressForm, house: e.target.value })} />
                <input type="text" placeholder="Enter city" value={addressForm.city}
                    onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })} />
                <input type="text" placeholder="Enter state" value={addressForm.state}
                    onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })} />
                <input type="text" placeholder="Enter zip code" value={addressForm.zipcode}
                    onChange={(e) => setAddressForm({ ...addressForm, zipcode: e.target.value })} />
                <input type="number" placeholder="Enter phone number" value={addressForm.phn}
                    onChange={(e) => setAddressForm({ ...addressForm, phn: e.target.value })} />
            </div>
            <div className="new-address-button">
                <button onClick={() => (prodDispatch({ type: "ADDRESS", payload: addressForm }), navigate("/add"))}>SAVE</button>
                <button>Fill with dummy Address</button>
                <button onClick={() => (prodDispatch({ type: "ADDRESS", payload: addressForm }), navigate("/add"))}>Close</button>
            </div>
        </div>
    </>
}