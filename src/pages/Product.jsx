import { Navigate, useParams } from "react-router"
import data from '../data/data.json'
import '../styles/pages/Product.scss'
import Carousel from "../components/Carousel";
import InfoDropdown from "../components/InfoDropdown";
import TagInfo from "../components/TagInfo";
import StarRating from "../components/StarRating";

const Product = () => {
    const { id } = useParams();
    const product = data.find((item) => item.id === id);

    if (!product) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="product-main-container">
            <Carousel images={product.pictures} />
            <div>
                <div className="product-info-container">
                    <div className="product-title-container">
                        <h1 className="product-title">{product.title}</h1>
                        <p>{product.location}</p>
                        <div className="product-tags">
                            {
                                product.tags.map((tag, index) => (
                                    <TagInfo key={index} content={tag} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-personnal-info-container">
                        <div className="product-host-container">
                            <p className="product-host-name">{product.host.name}</p>
                            <div className="product-picture-container">
                                <img src={product.host.picture} alt="photo profil" />
                            </div>
                        </div>
                        <StarRating rating={product.rating} />
                    </div>
                </div>
                <div className="product-dropdowns-container">
                    <div className="dropdown-main-container">
                        <InfoDropdown title="Description" content={product.description} />
                    </div>
                    <div className="dropdown-main-container">
                        <InfoDropdown title="Équipements" content={product.equipments} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product