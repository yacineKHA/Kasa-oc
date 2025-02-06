import { useState } from 'react';
import '../styles/components/Carousel.scss';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container">
            {images.length > 1 && (
                <img className='carousel-arrow left-arrow' src={leftArrow} alt="flèche de gauche" onClick={handlePrev} />
            )}
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            {images.length > 1 && (
                <img className='carousel-arrow right-arrow' src={rightArrow} alt="flèche de droite" onClick={handleNext} />
            )}
        </div>
    );
};

export default Carousel;
