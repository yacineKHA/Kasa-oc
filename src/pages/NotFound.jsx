import { Link } from "react-router";
import '../styles/pages/NotFound.scss'

const NotFound = () => {
    const title = "404";
    const content = "Oups! La page que vous demandez n'existe pas";
    const textLink = "Retouner sur la page d'accueil";

    return (
        <div className="not-found-main-container">
            <h1>{title}</h1>
            <p>
                {content}
            </p>
            <Link to="/">
                {textLink}
            </Link>
        </div>
    )
}

export default NotFound;