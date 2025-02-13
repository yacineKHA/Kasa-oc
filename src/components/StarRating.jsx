import starInactive from "../assets/star-inactive.png";
import starActive from "../assets/star-active.png";
import '../styles/components/StarRating.scss';
import PropTypes from 'prop-types';


const StarRating = ({ rating }) => {
  const totalStars = 5; // Nombre total d'étoiles

  return (
    <div className='star-rating-main-container'>
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? starActive : starInactive}
          alt="étoile note"
          className="star"
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.string.isRequired
}

export default StarRating;