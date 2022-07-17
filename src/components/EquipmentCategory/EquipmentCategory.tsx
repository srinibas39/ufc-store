import { useNavigate } from "react-router-dom";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext"




export const EquipmentCategory = () => {
    const { prodDispatch } = useProduct();
    const {mode}=useMode()
    const shopApparel = ["T-shirt", "Socks", "Cap", "Hoodie", "Pant", "Mouthguard", "Necklace"];
    const shopAccessories = ["MouthGuard", "Handwraps", "Gloves", "Body Refresher", "Key Chain", "Towel", "Glassware", "Earings"];
    const ShopEquipment = ["Heavy Bags", "Body Action System", "Training Cards", "Pin", "Chair", "Table", "Slipper", "Lanyard", "Retro Pager"];
    const ShopReplicaBelts = ["Championship Belt", "Action Figure", "Bobble Head", "Plushes", "Poster"];
    const navigate = useNavigate();

    return <>
        <h2 style={{ margin: "1rem",padding:"1rem" }} id={mode?`dark`:""} className="text-center">SHOP BY CATEGORY</h2>
        <div className="categoryshop" id={mode ? `dark` : ""} >
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/shopApparel.png")} alt="loading" />
                    <div id={mode ? `dark` : ""} onClick={() => (prodDispatch({ type: "CATEGORY", payload: shopApparel }), navigate("/products"))}>
                        <p>SHOP APPAREL</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/shopAccessories.png")} alt="loading" />
                    <div id={mode ? `dark` : ""} onClick={() => (prodDispatch({ type: "CATEGORY", payload: shopAccessories }), navigate("/products"))} >
                        <p>SHOP ACCESSORIES</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/ShopEquipment.png")} alt="loading" />
                    <div id={mode ? `dark` : ""} onClick={() => (prodDispatch({ type: "CATEGORY", payload: ShopEquipment }), navigate("/products"))}>
                        <p>SHOP EQUIPMENT</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/ShopReplicaBelts.png")} alt="loading" />
                    <div id={mode ? `dark` : ""} onClick={() => (prodDispatch({ type: "CATEGORY", payload: ShopReplicaBelts }), navigate("/products"))}>
                        <p>SHOP REPLICA BELTS</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
        </div></>
}