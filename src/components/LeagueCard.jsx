import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LeagueCard = ({ title, image, link }) => {
  return (
    <div
      className="league-box"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <Link to={link ?? `/`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

LeagueCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

export default LeagueCard;
