import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GameCard = ({ title, image, link }) => {
  return (
    <div
      className="games-box"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <Link to={link ?? `/`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

GameCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

export default GameCard;
