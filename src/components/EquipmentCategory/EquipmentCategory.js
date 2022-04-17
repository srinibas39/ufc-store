
export const EquipmentCategory = () => {
    return <>
        <h2 className="text-center">SHOP BY CATEGORY</h2>
        <div className="categoryshop">
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/shopApparel.png")} alt="loading" />
                    <div>
                        <p>SHOP APPAREL</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/shopAccessories.png")} alt="loading" />
                    <div>
                        <p>SHOP ACCESSORIES</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/ShopEquipment.png")} alt="loading" />
                    <div>
                        <p>SHOP EQUIPMENT</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={require("../../images/ShopReplicaBelts.png")} alt="loading" />
                    <div>
                        <p>SHOP REPLICA BELTS</p>
                        <span className="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
        </div></>
}