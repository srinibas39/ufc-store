import { useNavigate } from "react-router-dom"
import { useProduct } from "../../context/ProductContext/ProductContext";
import "./Address.css"


export const Address = () => {
    const navigate = useNavigate();
    const { prodState, prodDispatch } = useProduct();


    return <div className="address-container">
        <h2>My addresses(2)</h2>
        <div className="address">
            <div>
                <input type="radio" name="address" className="address-input" />
                <label htmlFor="address-input">
                    <p>Adarsh Ballika</p>
                    <p>#1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony</p>
                    <p>Bangalore, Maharashtra 560078</p>
                    <p>India</p>
                    <p>Phone number:5112003004</p>
                    <div><button>EDIT</button>
                        <button>REMOVE</button></div>
                </label>
            </div>
        </div>
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
                                <button>REMOVE</button></div>
                        </label>
                    </div>
                </div>
            })
        }

        {/* <div className="pay">
            <button className="pay-btn">PAY NOW</button>
        </div> */}
        <div className="add-new-address" onClick={() => navigate("/address")}>
            <span class="material-symbols-outlined">
                add
            </span>
            ADD NEW ADDRESS
        </div>

    </div>
}