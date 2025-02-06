import { Link } from "react-router";
import "../styles/components/Header.scss"
import logo from "../assets/LOGO.svg"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo Kasa"/>
            <nav className="nav">
                <Link to="/">Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;