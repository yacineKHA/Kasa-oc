import { Link } from 'react-router'
import '../styles/components/LocationCard.scss';


const LocationCard = ({data})=>{

    return(
        <Link className='item-main-container' to={`/product/${data.id}`}>
            <img src={data.cover} alt={data.title}/>
            <p>{data.title}</p>
        </Link>
    )
}

export default LocationCard