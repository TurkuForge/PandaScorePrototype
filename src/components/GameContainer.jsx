import PropTypes from 'prop-types';
import GameCard from './GameCard';

const GameContainer = ({ games }) => {
  return (
    <div className="games">
      {games.map(({ title, link, image }) => (
        <GameCard key={title} link={link} title={title} image={image} />
      ))}
    </div>
  );
};

GameContainer.propTypes = {
  games: PropTypes.array
};

export default GameContainer;
