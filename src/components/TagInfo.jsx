import '../styles/components/TagInfo.scss';
import PropTypes from 'prop-types';


const TagInfo = ({content})=>{

    return(
        <div className="tag-main-container">
            {content}
        </div>
    )
}

TagInfo.propTypes = {
    content: PropTypes.string.isRequired
}

export default TagInfo;
