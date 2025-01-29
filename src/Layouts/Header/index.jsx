import HeaderContent from "./Components/HeaderContent";
import HeaderTop from "./Components/HeaderTop";
import "./style.css"
const Header=()=>{
    return (
    <header className="header">
        <HeaderTop/>
        <HeaderContent/>
    </header>
    )
}
export default Header;