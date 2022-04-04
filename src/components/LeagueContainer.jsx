import PropTypes from 'prop-types';
import LeagueCard from 'components/LeagueCard';

const GameContainer = ({ leagues }) => {
  return (
    <div className="leagues">
      {leagues.map(({ title, link, image }) => (
        <LeagueCard key={title} link={link} title={title} image={image} />
      ))}
    </div>
  );
};

GameContainer.propTypes = {
  leagues: PropTypes.array
};

export default GameContainer;
