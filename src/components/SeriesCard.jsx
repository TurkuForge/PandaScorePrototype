import PropTypes from 'prop-types';

const SeriesCard = ({ title }) => {
  return (
    <div className="Series-box">
      <h4>{title}</h4>
    </div>
  );
};

SeriesCard.propTypes = {
  title: PropTypes.string
};

export default SeriesCard;
