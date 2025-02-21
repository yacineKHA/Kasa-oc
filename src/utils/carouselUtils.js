/**
 * Navigation vers l'image précédente
 */
export const handlePrev = (images, setCurrentIndex) => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
};

/**
 * Navigation vers l'image suivante
 */
export const handleNext = (images, setCurrentIndex) => {
    setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
};