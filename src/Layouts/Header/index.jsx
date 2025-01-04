import HeaderContent from "./Components/HeaderContent";
import HeaderTop from "./Components/HeaderTop";
import "./Header.css"
const Header=()=>{
    return (
    <header className="header">
        <HeaderTop/>
        <HeaderContent/>
    </header>
    )
}
export default Header;