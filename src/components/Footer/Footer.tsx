import "./Footer.css"

export const Footer = () => {
    return <footer>
        <ul className="footer-list">
            <li className="bold">SHOP</li>
            <li>About us</li>
            <li>Gift Cards</li>
            <li>Contact us</li>
        </ul>
        <ul className="footer-list">
            <li className="bold">HELP AND ADVICE</li>
            <li>Shipping and Returns</li>
            <li>Cookie policy</li>
            <li>Size Guide</li>
        </ul>
        <ul className="footer-list">
            <li className="bold">CONTACT</li>
            <li>UFCStore@ufc.com</li>
            <li>Gift Cards</li>
            <li className="footer-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </li>
        </ul>
    </footer>
}