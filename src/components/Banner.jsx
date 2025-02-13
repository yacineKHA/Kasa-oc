import "../styles/components/Banner.scss";
import PropTypes from 'prop-types';

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

Banner.propTypes = {
    text: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
};

export default Banner