import { Link } from "react-router";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>
                Oups! La page que vous demandez n'existe pas
            </p>
            <Link to="/">
                Retouner sur la page d'accueil
            </Link>
        </div>
    )
}

export default NotFound;