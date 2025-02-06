import '../styles/components/InfoDropdown.scss'
import icon from "../assets/arrow_dropdown.png"
import { useState } from 'react'

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
            <div className={`dropdown-content-container ${isOpen ? 'open' : ''}`}>
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

export default InfoDropdown;