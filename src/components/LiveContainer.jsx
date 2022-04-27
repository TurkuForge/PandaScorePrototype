import PropTypes from 'prop-types';
import LiveCard from 'components/LiveCard';

const LiveContainer = ({ lives }) => {
  console.log(lives);
  return (
    <div className="lives">
      {lives &&
        lives.length &&
        lives.map((lives, index) => <LiveCard key={index} title={lives?.full_name ?? ''} />)}
    </div>
  );
};

LiveContainer.propTypes = {
  lives: PropTypes.array
};

export default LiveContainer;
