import { useNavigate } from "react-router-dom"


export const Navbar = () => {
    const navigate = useNavigate();
    return <div className="navBar">
        <div className="navBar-img" onClick={() => navigate("/")}>

            <svg
                className="site-logo"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122 26"
                style={{ cursor: "pointer" }}
            >
                <path
                    d="M57.02 25.25l.96-2.473c1.378.42 2.52.723 3.943.723 1.727 0 2.162-.328 2.513-1.596.081-.25.137-.506.167-.766.069-.655-.357-.84-2.106-1.292-2.4-.61-3.222-1.47-3.048-3.17.068-.533.18-1.06.339-1.574.976-3.238 1.93-3.895 5.945-3.895 1.428.038 2.849.229 4.236.569l-.847 2.691c-1.293-.3-2.614-.47-3.94-.503-1.596 0-1.93.21-2.25 1.377-.07.26-.127.522-.17.787-.07.701.364.81 2.047 1.247 2.681.678 3.349 1.51 3.198 2.998a9.095 9.095 0 01-.337 1.552c-.847 2.996-2.037 4.287-6.229 4.287-1.218 0-3.325-.416-4.422-.962zm17.868.744h-3.282l3.285-11.732h-3.994l.803-2.843h11.266l-.8 2.843h-3.992l-3.286 11.732zm6.444-3.654c.025-.229.07-.456.136-.677l1.681-6.016c.766-2.712 2.629-4.44 6.796-4.44 3.507 0 4.947 1.97 4.74 3.96a3.478 3.478 0 01-.133.657l-1.673 5.948c-.773 2.777-2.607 4.44-6.977 4.44-3.48 0-4.77-1.902-4.57-3.871v-.001zm10.017-6.846c.093-.896-.453-1.442-2.026-1.442-1.694 0-2.647.722-2.986 1.89l-1.568 5.555a4.716 4.716 0 00-.098.501c-.088.876.438 1.38 2.034 1.38 1.695 0 2.638-.63 2.987-1.89l1.568-5.555c.04-.144.07-.29.09-.439h-.001zm9.834 5.95h-2.24l-1.272 4.55h-3.254l4.088-14.566h5.656c3.177 0 4.603 1.18 4.384 3.323a7.594 7.594 0 01-.18.897l-.491 1.75c-.496 1.815-1.271 2.976-3.177 3.61l2.266 4.986h-3.651l-2.129-4.55zm3.849-5.502c.057-.201.099-.406.127-.613.076-.744-.358-1.05-1.483-1.05h-2.711l-1.23 4.392h2.797c1.44 0 1.873-.525 2.186-1.64l.314-1.09v.001zm7.673-4.514h9.294l-.803 2.834h-6.032l-.771 2.778h5.566l-.8 2.821h-5.566l-.935 3.282h6.033l-.78 2.842h-9.294l4.088-14.557z"
                    fill="#1E1F23"
                ></path>
                <path
                    d="M39.78 4.19H25.655L26.83 0h14.12l-1.17 4.19zm-9.57 7.078h7.588l1.172-4.19H24.849L21.5 19.043h6.534l2.175-7.776.001.001zm16.017 3.445a.62.62 0 01-.322-.386.568.568 0 01.008-.286l2.559-9.145a.836.836 0 01.39-.55c.304-.126.634-.18.963-.158h7.053L58.052 0H48.16c-1.8 0-3.056.21-3.789.615-.733.405-1.239 1.115-1.531 2.163l-3.656 13.04a2.637 2.637 0 00-.093.569c-.01.195.008.39.055.581a2.436 2.436 0 001.26 1.52 5.12 5.12 0 002.491.556h10.35l1.187-4.188h-7.576a1.28 1.28 0 01-.636-.143h.005zM7.202 0L2.775 15.818a2.635 2.635 0 00-.095.57c-.01.195.01.39.055.58a2.435 2.435 0 001.271 1.518 5.084 5.084 0 002.489.558h7.364c1.8 0 3.059-.21 3.79-.613.73-.403 1.238-1.117 1.53-2.166L23.724 0H17.19l-3.96 14.148a.836.836 0 01-.39.55c-.305.126-.634.18-.963.156h-1.125c-.22.007-.44-.041-.635-.14a.635.635 0 01-.32-.387.575.575 0 01.008-.286L13.732 0h-6.53zM.81 23.055L0 25.942h51.371l.807-2.887H.81z"
                    fill="#CD1421"
                ></path>
            </svg>
        </div>
        <div className="navBar-content">
            <div className="searchBox">
                <input type="search" placeholder="search" />
                <span className="material-icons-outlined"> search </span>
            </div>
            <div onClick={() => navigate("/profile")}>

                <span className="material-icons-outlined"> person </span>
            </div>
            <div onClick={() => navigate("/products")}>

                <span className="material-icons-outlined">
                    inventory_2
                </span>
            </div>
            <div onClick={() => navigate("/cart")}>

                <span className="material-icons-outlined"> shopping_bag </span>
            </div>
            <div onClick={() => navigate("/wishlist")}>

                <span className="material-icons-outlined">
                    favorite_border
                </span>
            </div>

        </div>
    </div>
}