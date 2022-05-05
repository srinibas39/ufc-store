import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext/ProductContext";
import "./Address.css"


export const Address = () => {
    const navigate = useNavigate();
    const { prodState, prodDispatch } = useProduct();

    useEffect(() => {
        if (prodState.addresses.length === 0) {
            prodDispatch({ type: "ADDRESS", payload: prodState.addressDummy })
        }
    }, [])

    return <div className="address-container">
        <h2>My addresses(2)</h2>

        {
            prodState.addresses && prodState.addresses.map((el, idx) => {
                return <div className="address" key={idx}>
                    <div>
                        <input type="radio" name="address" className="address-input" />
                        <label htmlFor="address-input">
                            <p>{el.name}</p>
                            <p>{el.house}</p>
                            <p>{el.city} {el.state} {el.zipcode}</p>
                            <p>{el.country}</p>
                            <p>Phone number:{el.phn}</p>
                            <div><button onClick={() => (prodDispatch({ type: "ADDRESS_REMOVE", payload: el }), prodDispatch({ type: "ADDRESS_EDIT", payload: el }), navigate("/address"))}>EDIT</button>
                                <button className="remove-btn" onClick={() => prodDispatch({ type: "ADDRESS_REMOVE", payload: el })}>REMOVE</button></div>
                        </label>
                    </div>
                </div>
            })
        }

        
        <div className="add-new-address" onClick={() => navigate("/address")}>
            <span class="material-symbols-outlined">
                add
            </span>
            ADD NEW ADDRESS
        </div>

        <div className="pay">
            <button className="pay-btn">PAY NOW</button>
        </div>

    </div>
}