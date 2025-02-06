import "../styles/components/Footer.scss";
import logo from "../assets/logo_white.svg"

const Footer = ()=>{
    return(
        <footer className="Footer-container">
            <img src={logo} alt="logo du site Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer