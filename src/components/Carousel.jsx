import { useState } from 'react';
import '../styles/components/Carousel.scss';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import PropTypes from 'prop-types';
import { handleNext, handlePrev } from '../utils/carouselUtils';


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="carousel-container">
            {images.length > 1 && (
                <img className='carousel-arrow left-arrow' src={leftArrow} alt="flèche de gauche" onClick={()=> handlePrev(images, setCurrentIndex)} />
            )}
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            {images.length > 1 && (
                <img className='carousel-arrow right-arrow' src={rightArrow} alt="flèche de droite" onClick={()=> handleNext(images, setCurrentIndex)} />
            )}
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // images doit être un tableau de chaînes de caractères et est requis
};


export default Carousel;
