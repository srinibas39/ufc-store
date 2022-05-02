import "./Address.css"

export const Address = () => {
    return <>
        <div className="new-address-container">
            <h2>ADD NEW ADDRESS</h2>
            <div className="new-address-input">
                <input type="text" placeholder="Enter country" />
                <input type="text" placeholder="Enter name" />
                <input type="text" placeholder="Enter house no street colony" />
                <input type="text" placeholder="Enter city" />
                <input type="text" placeholder="Enter state" />
                <input type="text" placeholder="Enter zip code" />
                <input type="text" placeholder="Enter zip code" />
            </div>
            <div className="new-address-button">
                <button>SAVE</button>
                <button>Fill with dummy Address</button>
                <button>Close</button>
            </div>
        </div>
    </>
}