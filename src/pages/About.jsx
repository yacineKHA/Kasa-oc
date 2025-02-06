import Banner from "../components/Banner";
import '../styles/pages/About.scss'
import backgroundImage from '../assets/background_2.png'
import InfoDropdown from "../components/InfoDropdown";
import data from '../data/aboutInformations.json'


const About = () => {

    return (
        <div className="about-container">
            <Banner backgroundImage={backgroundImage} />
            <div className="about-informations-list">
                {
                    data.map((data) => (
                        <InfoDropdown key={data.title} title={data.title} content={data.content} />
                    ))
                }
            </div>
        </div>
    )
}

export default About;