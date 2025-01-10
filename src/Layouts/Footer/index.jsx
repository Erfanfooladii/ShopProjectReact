import FooterBottom from "./Components/FooterBottom";
import FooterTop from "./Components/FooterTop";
import "./style.css"
const Footer = () => {
    return(
        <footer className="footer">
            <FooterTop/>
            <FooterBottom/>
        </footer>
    )
};
export default Footer;