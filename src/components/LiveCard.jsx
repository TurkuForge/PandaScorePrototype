import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LiveCard = ({ title, image, link }) => {
  return (
    <div
      className="lives-box"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <Link to={link ?? `/`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

LiveCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

export default LiveCard;
