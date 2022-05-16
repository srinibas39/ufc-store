import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import "./AddressForm.css"
import { useAddress } from "../../context/AddressContext/AddressContext";


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




    const { addressState, addressDispatch } = useAddress();
    const [addressError, setAddressError] = useState({
        countryError: "",
        nameError: "",
        houseError: "",
        cityError: "",
        stateError: "",
        zipcodeError: "",
        phnError: "",
    })


    useEffect(() => {
        addressState.addressEdit && setAddressForm(() => addressState.addressEdit)
    }, [addressState.addressEdit])

    const handleSave = () => {

        if (!addressForm.country || !addressForm.name || !addressForm.house || !addressForm.city || !addressForm.state || !addressForm.zipcode || !addressForm.phn) {
            setAddressError({
                ...addressError,
                countryError: !addressForm.country && "*Please fill the country field",
                nameError: !addressForm.name && "*Please fill the name field",
                houseError: !addressForm.house && "*Please fill the house field",
                cityError: !addressForm.city && "*Please fill the city field",
                stateError: !addressForm.state && "*Please fill the state field",
                zipcodeError: !addressForm.zipcode && "*Please fill the zipcode field",
                phnError: !addressForm.phn && "*please fill the phone number field"
            })

        }
        else {
            addressDispatch({ type: "ADDRESS", payload: addressForm });
            navigate("/add");
        }


    }

    return <>
        <div className="new-address-container">
            <h2>ADD NEW ADDRESS</h2>

            <div className="new-address-input">
                {addressError.countryError && <small style={{ color: "red" }}>{addressError.countryError}</small>}
                <input type="text" placeholder="Enter country" value={addressForm.country}
                    onChange={(e) => setAddressForm({ ...addressForm, country: e.target.value })} />

                {addressError.nameError && <small style={{ color: "red" }}>{addressError.nameError}</small>}
                <input type="text" placeholder="Enter name" value={addressForm.name}
                    onChange={(e) => setAddressForm({ ...addressForm, name: e.target.value })} />

                {addressError.houseError && <small style={{ color: "red" }}>{addressError.houseError}</small>}
                <input type="text" placeholder="Enter house no street colony" value={addressForm.house}
                    onChange={(e) => setAddressForm({ ...addressForm, house: e.target.value })} />

                {addressError.cityError && <small style={{ color: "red" }}>{addressError.cityError}</small>}
                <input type="text" placeholder="Enter city" value={addressForm.city}
                    onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })} />

                {addressError.stateError && <small style={{ color: "red" }}>{addressError.stateError}</small>}
                <input type="text" placeholder="Enter state" value={addressForm.state}
                    onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })} />

                {addressError.zipcodeError && <small style={{ color: "red" }}>{addressError.zipcodeError}</small>}
                <input type="text" placeholder="Enter zip code" value={addressForm.zipcode}
                    onChange={(e) => setAddressForm({ ...addressForm, zipcode: e.target.value })} />

                {addressError.phnError && <small style={{ color: "red" }}>{addressError.phnError}</small>}
                <input type="number" placeholder="Enter phone number" value={addressForm.phn}
                    onChange={(e) => setAddressForm({ ...addressForm, phn: e.target.value })} />
            </div>
            <div className="new-address-button">
                <button onClick={() => handleSave()}>SAVE</button>
                <button onClick={() => setAddressForm(() => addressState.addressDummy)}>Fill with dummy Address</button>
                <button onClick={() => (navigate("/add"))}>Close</button>
            </div>
        </div>
    </>
}