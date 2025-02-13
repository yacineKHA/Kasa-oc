import { Link } from 'react-router'
import '../styles/components/LocationCard.scss';
import PropTypes from 'prop-types';


const LocationCard = ({data})=>{

    return(
        <Link className='item-main-container' to={`/product/${data.id}`}>
            <img src={data.cover} alt="image cover"/>
            <p>{data.title}</p>
        </Link>
    )
}

export default LocationCard