
export const EquipmentCategory = () => {
    return <>
        <h2 class="text-center">SHOP BY CATEGORY</h2>
        <div class="categoryshop">
            <div class="card">
                <div class="card-img">
                    <img src={require("../../images/shopApparel.png")} alt="loading" />
                    <div>
                        <p>SHOP APPAREL</p>
                        <span class="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src={require("../../images/shopAccessories.png")} alt="loading" />
                    <div>
                        <p>SHOP ACCESSORIES</p>
                        <span class="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src={require("../../images/ShopEquipment.png")} alt="loading" />
                    <div>
                        <p>SHOP EQUIPMENT</p>
                        <span class="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src={require("../../images/ShopReplicaBelts.png")} alt="loading" />
                    <div>
                        <p>SHOP REPLICA BELTS</p>
                        <span class="material-icons-outlined"> trending_flat </span>
                    </div>
                </div>
            </div>
        </div></>
}