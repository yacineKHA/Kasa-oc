import '../styles/components/InfoDropdown.scss'
import icon from "../assets/arrow_dropdown.png"
import { useState } from 'react'
import PropTypes from 'prop-types';


const InfoDropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown-main-container">
            <div className='dropdown-title-container'>
                {title}
                <div onClick={handleToggle}>
                    <img className={`icon ${isOpen ? 'rotate' : ''}`} src={icon} alt='arrow' />
                </div>
            </div>

            {/**
             * Cntenu affiché sous condition
             */}
            <div className={`dropdown-content-container ${isOpen ? 'open' : ''}`}>
                {/** Cas où content est un tableau */}
                {Array.isArray(content) ? (
                    content.map((item, index) => (
                        <div key={index} className="dropdown-content-item">
                            {item}
                        </div>
                    ))
                ) : (
                    content
                )}
            </div>
        </div>
    )
}

InfoDropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default InfoDropdown;