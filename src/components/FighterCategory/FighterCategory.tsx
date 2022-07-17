import { useNavigate } from "react-router-dom";
import { useMode } from "../../context/ModeContext/ModeContext";


export const FighterCategory = () => {
    const navigate = useNavigate();
    const {mode}=useMode()
    return <>
        <h2  id={mode?`dark`:""} style={{ margin: "1rem",padding:"1rem" }} className="text-center">SHOP BY FIGHTERS</h2>
        <div className="fighters" id={mode ? `dark` : ""}>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require(`../../images/Amanda.png`)} alt="loading..." />
                <button id={mode ? `dark` : ""}>Amanda Nunes</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Brandon Moreno.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Brandon Moreno</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Colby Covington.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Colby Covington</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Conor.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Conor Mcgregor</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Deivesn.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Deiveson Figuerido</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/DerrickLewis.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Derrick Lewis</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Francis.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Francis Ngannaou</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Gane.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Ciryl Gane</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/izz.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Israel Adesanya</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Julianna Pena.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Julianna Pena</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Khabib.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Julianna Pena</button>
            </div>
            <div className="display-container" onClick={() => navigate("/products")}>
                <img src={require("../../images/Masividal.png")} alt="loading..." />
                <button id={mode ? `dark` : ""}>Jorge Masvidal</button>
            </div>
        </div>
    </>
}