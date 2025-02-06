import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import "../styles/pages/Home.scss";
import LocationCard from "../components/LocationCard";
import backgroundImage from '../assets/background_img.png'

const Home = () => {
    const [data, setData] = useState([]);
    const dataLink = '/src/data/data.json';
    const bannertext = "Chez vous, partout et ailleurs"

    useEffect(() => {
        fetch(dataLink)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Erreur lors du chargement des données: ', error));
    }, [])

    return (
        <div className="home-main-container">
            <Banner text={bannertext} backgroundImage={backgroundImage}/>
            <div className="home-list-container">
                {data.map((item) => (
                    <LocationCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}

export default Home;