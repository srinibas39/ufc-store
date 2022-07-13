import { useNavigate } from "react-router-dom";


export const FighterCategory = () => {
    const navigate = useNavigate();
    return <>
        <h2 className="text-center">SHOP BY FIGHTERS</h2>
        <div className="fighters">
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require(`../../images/Amanda.png`)} alt="loading..." />
                <button>Amanda Nunes</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Brandon Moreno.png")} alt="loading..." />
                <button>Brandon Moreno</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Colby Covington.png")} alt="loading..." />
                <button>Colby Covington</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Conor.png")} alt="loading..." />
                <button>Conor Mcgregor</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Deivesn.png")} alt="loading..." />
                <button>Deiveson Figuerido</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/DerrickLewis.png")} alt="loading..." />
                <button>Derrick Lewis</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Francis.png")} alt="loading..." />
                <button>Francis Ngannaou</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Gane.png")} alt="loading..." />
                <button>Ciryl Gane</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/izz.png")} alt="loading..." />
                <button>Israel Adesanya</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Julianna Pena.png")} alt="loading..." />
                <button>Julianna Pena</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Khabib.png")} alt="loading..." />
                <button>Julianna Pena</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Masividal.png")} alt="loading..." />
                <button>Jorge Masvidal</button>
            </div>
        </div>
    </>
}