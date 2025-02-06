import "../styles/components/Banner.scss";

const Banner = ({ text, backgroundImage }) => {

    return (
        <div
            className="home-banner"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
            <p>{text}</p>
        </div>
    )
}

export default Banner